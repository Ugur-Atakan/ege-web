import mongoose from "mongoose";

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
  }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
