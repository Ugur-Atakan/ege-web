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