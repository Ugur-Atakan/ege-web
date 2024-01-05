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
});

export default companySchema;