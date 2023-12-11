
import mongoose from "mongoose";

// superadmin, admin, user.
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  level: {
    type: String,
    default: "user"
  },
  type: {
    type: String,
    default: "local"
  },
  companies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }]
}, { timestamps: true });

const User = mongoose.models.User ||  mongoose.model('User', userSchema);

export default User;
