import mongoose from "mongoose";
import crypto from "crypto";

//* Three types of users: superadmin, admin, user
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
  enableToken: {
    type: String,
    default: crypto.randomBytes(32).toString('hex')
  },
  active: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
