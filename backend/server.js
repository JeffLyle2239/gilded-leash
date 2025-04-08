const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


console.log(process.env.MONGO_URI)
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
 
  const customerRoutes = require('./routes/customerroute')

app.use('/customer', customerRoutes)
  
  
// Basic Route


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

