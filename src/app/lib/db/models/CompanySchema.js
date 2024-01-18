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
  },
  companyType: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'paid', 'payment-pending', 'inprogress', 'approved', 'rejected' ],
    default: 'payment-pending'
  },
  products: [{
    name: {
      type: String
    },
    price: {
      type: Number
    }, 
    stripePriceID: {
      type: String
    },
    frequency: {
      type: String,
      enum: ['monthly', 'annually', 'oneTime', 'free']
    }
  }],
  address: {
    country: {
      type: String,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null
    },
    zipCode: {
      type: String,
      default: null
    },
    streetAddress: {
      type: String,
      default: null
    }
  }
});


export default companySchema;