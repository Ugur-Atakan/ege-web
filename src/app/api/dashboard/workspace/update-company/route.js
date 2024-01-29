import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'
import Workspace from '@/app/lib/db/models/WorkspaceModel'
import mongoose from 'mongoose'

//* Update the company 
export async function PUT(request) {
    const { companyID, label, value } = await request.json();

    try { 
        const cID = new mongoose.Types.ObjectId(companyID);
        const workspace = await Workspace.findOne({ 'companies._id': cID });
        if (!workspace) { return new Response('Workspace not found', { status: 404 })}
    
        const company = workspace.companies.find(company => company._id.equals(cID));
        if (!company) { return new Response('Company not found', { status: 404 })}
    
        company[label] = value; 
        await workspace.save();
    
        return new Response(company, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.log(err)
        return new Response('Error updating company', { status: 500 });
    }
}   
