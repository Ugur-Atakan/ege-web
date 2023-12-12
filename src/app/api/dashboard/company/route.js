import { connectDB } from '@/app/lib/db/mongodb'
import Company from '@/app/lib/db/models/CompanyModel'
import User from '@/app/lib/db/models/UserModel'

// Creating a company
export async function POST(request) {
    const { companyName, state, companyPackage } = await request.json();
    await connectDB();

    try {
        // Check if an existing user exists and then return the user
        const existingCompany = await Company.findOne({ companyName: companyName });
        if (existingCompany) {
            return new Response('Company exits', {
                status: 409,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return new Response('User not found', {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Create a new company
        const company = await Company.create({ companyName, state, companyPackage });
        user.companies.push(company._id);
        await user.save();

        return new Response('New company created', {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch (err) {
        return new Response(`Error creating company ${err}`, {
            status: 500
        })
    }
}   

// GET Company Info
export async function GET(request) {
    await connectDB();
    const companies = await Company.find({});
    return new Response(JSON.stringify(companies), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// DELETE a single user
export async function DELETE(request){
    return; 
}