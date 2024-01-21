import React from 'react';
import Content from './components/Content'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { connectDB } from '@/app/lib/db/mongodb'
import mongoose from 'mongoose'
import Workspace from '@/app/lib/db/models/WorkspaceModel'

const getWorkspace = async (userID) => {
    await connectDB();
    try {
        const recentWorkspaces = await Workspace.find()
            .sort({ createdAt: -1 })
            .limit(10)
            .populate({
                path: 'companies',
                model: 'Company', // Replace 'Company' with the actual name of your Company model
                options: { sort: { createdAt: -1 }, limit: 10 }
            });
        if (!recentWorkspaces) null;
        return recentWorkspaces;
    } catch (err) {
        return null;
    }
}

const Page = async () => {
    const session = await getServerSession(options);
    const workspace = await getWorkspace();
    let workspaceJSON;
    if (workspace) {
      workspaceJSON = JSON.stringify(workspace.companies);
    }

    return (
        <div>
            <Content />
        </div>
    );
};

export default Page;
