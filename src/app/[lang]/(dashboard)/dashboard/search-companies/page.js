import React from 'react';
import Content from './components/Content'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { connectDB } from '@/app/lib/db/mongodb'
import mongoose from 'mongoose'
import Workspace from '@/app/lib/db/models/WorkspaceModel'

const getWorkspace = async () => {
    await connectDB();
    try {
        // 
        const recentWorkspaces = await Workspace.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate({
                path: 'companies',
                model: 'Company', // Replace 'Company' with the actual name of your Company model
                options: { sort: { createdAt: -1 }, limit: 10 }
            });
        if (!recentWorkspaces) null;

        // extract the companies from the workspaces
        const companies = recentWorkspaces.map((workspace) => {
            return workspace.companies;
        });

        // flatten array of arrays and extract info from each company
        const flattenedData = companies.flatMap(innerArray => {
            // Use map to iterate over the inner array
            return innerArray.map(company => {
              return {
                companyName: company.companyName,
                companyPackage: company.companyPackage,
                id: company.id.toString(), // Convert ObjectId to string
              };
            });
        });
          
        
        return flattenedData;
    } catch (err) {
        return null;
    }
}

const Page = async ({ params: { lang } }) => {
    const session = await getServerSession(options);
    const companies = await getWorkspace();

    return (
        <div>
            <Content lang={lang} companies={companies} />
        </div>
    );
};

export default Page;
