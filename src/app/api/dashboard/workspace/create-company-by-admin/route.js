import { connectDB } from '@/app/lib/db/mongodb';
import mongoose from 'mongoose';
import Workspace from '@/app/lib/db/models/WorkspaceModel';

export async function POST(request) {
    const { 
        companyName, mainState, companyPackage, companyType,
        address, userID, customerFirstName, customerLastName, email } = await request.json();
    // const { country, city, zipCode, state, streetAddress } = address;
    console.log(companyName, mainState, companyPackage, companyType, address, userID, customerFirstName, customerLastName, email);
    return new Response('Not implemented', { status: 501 });
    await connectDB();

    try {
        // Validate if workspaceID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userID)) {
            return new Response('Invalid workspaceID', { status: 400 });
        }

        const user = await User.create({ customerFirstName, customerLastName, email, password: '' });        
        const uID = new mongoose.Types.ObjectId(userID);

        // Create company from Schema
        const newCompany = {
            companyName,
            state: mainState,
            companyPackage,
            companyType,
            status: 'payment-pending',
            address: {
                country,
                city,
                zipCode,
                streetAddress,
                state,
            },
            createdBy: uID,
        };

        // Add the new company to the workspace
        workspace.companies.push(newCompany);
        await workspace.save();

        return new Response('New company created by admin', {
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
