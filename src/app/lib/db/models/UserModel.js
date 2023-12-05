
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
    type: String,
    required: true
  },
  level: {
    type: String,
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User ||  mongoose.model('User', userSchema);

export default User;
