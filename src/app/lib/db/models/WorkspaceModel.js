import mongoose from "mongoose";
import companySchema from "./CompanySchema";

const workspaceSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  companies: [companySchema]
}, { timestamps: true });

const Workspace = mongoose.models.Workspace || mongoose.model('Workspace', workspaceSchema);

export default Workspace;