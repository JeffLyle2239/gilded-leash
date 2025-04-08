const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel'); // Adjust the path if your model is in a different folder

// GET: Fetch all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers', error });
  }
});

// POST: Add a new customer
router.post('/', async (req, res) => {
  try {
    const { fullname, address, email, phonenumber, plan, cost } = req.body;

    // Validate required fields
    if (!fullname || !address || !email || !phonenumber || !plan || !cost) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new customer
    const newCustomer = new Customer({
      fullname,
      address,
      email,
      phonenumber,
      plan,
      cost
    });

    // Save the customer to the database
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
  console.log(error, 'ya messed up')
  }
});

module.exports = router;