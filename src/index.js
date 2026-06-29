import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server chal raha hai port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connect nahi hua:', error);
  });






/*
import express from "express"
const app = express()

( async () => {
  try {
     await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}` );

app.on("error", (error) => {
    console.log("error:", error);
    throw error
})

app.listen(process.env.PORT, () =>{
      console.log(` App is listening part : ${process.env.PORT}`);

})


  } catch (error) {
    console.log('❌ MongoDB connection FAILED:', error);
  }
})();
*/