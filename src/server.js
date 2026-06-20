require('dotenv').config();

const express = require('express')
const connectDB = require('./db/db');

const app = require('./app');

connectDB();

app.listen(process.env.PORT || 3000,()=>{
  console.log(" App is running on 3000 port.. ")
})