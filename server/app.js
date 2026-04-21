const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());


//Importing Routes
const categoryRoutes = require('./routes/category');
app.use('/api/category', categoryRoutes);



console.log('👉 App is starting...');
console.log('👉 PORT:', process.env.PORT);
console.log('👉 Mongo URI loaded:', !!process.env.CONNECTION_STRING);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('✅ Connected to MongoDB');

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });
