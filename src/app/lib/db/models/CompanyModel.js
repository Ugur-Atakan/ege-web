import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  companyPackage: {
    type: String
  }
}, { timestamps: true });

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;
