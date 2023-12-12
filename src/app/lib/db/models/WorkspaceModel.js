import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  companies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }]
}, { timestamps: true });

const Workspace = mongoose.models.Workspace || mongoose.model('Workspace', workspaceSchema);

export default Workspace;
