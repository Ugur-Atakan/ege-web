import { connectDB } from '@/app/lib/db/mongodb';
import mongoose from 'mongoose';
import Workspace from '@/app/lib/db/models/WorkspaceModel';

export async function POST(request) {
    const { 
        companyName, mainState, companyPackage, companyType, 
        userID, address, workspaceID } = await request.json();
    const { country, city, zipCode, state, streetAddress } = address;

    await connectDB();

    try {
        // Validate if workspaceID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(workspaceID)) {
            return new Response('Invalid workspaceID', { status: 400 });
        }

        const moongoWorkSpaceID = new mongoose.Types.ObjectId(workspaceID);
        const workspace = await Workspace.findById(moongoWorkSpaceID);

        if (!workspace) {
            return new Response('Workspace not found', { status: 404 });
        }

        // find user in same workspace
        const uID = new mongoose.Types.ObjectId(userID);
        // const userExists = workspace.users.some((user) => user.equals(uID));

        // // if not found in same workspace find in other workspaces and check user level
        // if (!userExists) {
            
        // }

        // Check if company exists in any workspace
        const companyExists = workspace.companies.some((company) => company.companyName === companyName);

        if (companyExists) {
            return new Response('Company name already exists in workspace', { status: 409 });
        }

        // Create company from Schema
        const newCompany = {
            companyName,
            state: mainState,
            companyPackage,
            companyType,
            createdBy: uID,
            status: 'payment-pending',
            address: {
                country,
                city,
                zipCode,
                streetAddress,
                state,
            },
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
