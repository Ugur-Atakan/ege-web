import { connectDB } from '@/app/lib/db/mongodb'
import User from '@/app/lib/db/models/UserModel'
import Company from '@/app/lib/db/models/CompanyModel'

export const getCompanyData = async (companyId) => {
    await connectDB();
    const company = user.companies.id(companyId);
    return company;
}

export const getUsersCompanies = async (companiesID) => {
    await connectDB();
    const companies = await Company.find({ _id: { $in: companiesID } });
    return companies;
}

export const getUserData = async (userEmail) => {  
    await connectDB();
    const user = await User.findOne({ email: userEmail }).select('-password');
    return user; 
}

