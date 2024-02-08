import { connectDB } from '@/app/lib/db/mongodb';
import mongoose from 'mongoose';
import Workspace from '@/app/lib/db/models/WorkspaceModel';
import User from '@/app/lib/db/models/UserModel';

export async function POST(request) {
    const { 
        companyName, mainState, companyPackage, companyType,
        address, userID, customerFirstName, customerLastName, email } = await request.json();
    const { country, city, zipCode, state, streetAddress } = address;

    await connectDB();

    try {
        // Validate if workspaceID is a valid ObjectId
        const user = await User.create({ firstName: customerFirstName, lastName: customerLastName, email, password: '' });        
        const adminID = new mongoose.Types.ObjectId(userID);
        const workspace = await Workspace.create({ users: [user._id] });
        
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
            createdBy: adminID,
        };

        // Add the new company to the workspace
        workspace.companies.push(newCompany);
        await workspace.save();
        const companyId = workspace.companies[workspace.companies.length - 1]._id;

        return new Response(JSON.stringify({ companyId }), {
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
