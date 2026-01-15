const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
require('dotenv/config'); 

app.use(cors()); //Enable CORS for all routes
app.use(bodyParser.json()); //Body parser middleware to parse JSON requests

const categoryRoutes = require('./routes/category');

app.use('/category', categoryRoutes); //Use category routes for /category endpoint

// MongoDB connection
mongoose.connect(process.env.CONNECTION_STRING)
      .then(() => {
          console.log('Connected to MongoDB');
          //Starting the server after successful DB connection
          
          // Server
          app.listen(process.env.PORT, () => {
            console.log(`Server is running on port : ${process.env.PORT}`);
          });

      }).catch(err => {
          console.error('Could not connect to MongoDB:', err.message);
      });


