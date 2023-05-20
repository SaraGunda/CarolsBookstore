const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL).catch(err => {
  if(err) {
    console.log("There was an error.");  
  }
  console.log ("Connection successful!")
});