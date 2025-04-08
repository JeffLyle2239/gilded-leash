const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: Number, required: true },
    plan: {type: String, required: true},
    cost: {type: Number, required: true},
  });
  


  module.exports =  mongoose.model('Customer', customerSchema);