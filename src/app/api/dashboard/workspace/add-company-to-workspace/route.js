import { connectDB } from '@/app/lib/db/mongodb';
import mongoose from 'mongoose';
import Workspace from '@/app/lib/db/models/WorkspaceModel';

export async function POST(request) {
    const { companyName, state, companyPackage, workspaceID } = await request.json();
    await connectDB();

    try {
        // Validate if workspaceID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(workspaceID)) {
            return new Response('Invalid workspaceID', { status: 400 });
        }

        const objId = new mongoose.Types.ObjectId(workspaceID);
        const workspace = await Workspace.findById(objId);

        if (!workspace) {
            return new Response('Workspace not found', { status: 404 });
        }

        // Check if company exists in any workspace
        const companyExists = workspace.companies.some((company) => company.companyName === companyName);

        if (companyExists) {
            return new Response('Company name already exists in workspace', { status: 409 });
        }

        // Create company from Schema
        const newCompany = {
            companyName,
            state,
            companyPackage,
        };

        // Add the new company to the workspace
        workspace.companies.push(newCompany);
        await workspace.save();

        return new Response('New company created in the workspace', {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        return new Response(`Error creating company ${err}`, {
            status: 500,
        });
    }
}
