require('dotenv').config();

const express = require('express')
const connectDB = require('./src/db/db');

const app = require('./src/app');

connectDB();

app.listen(process.env.PORT || 3000,()=>{
  console.log(" App is running on 3000 port.. ")
})