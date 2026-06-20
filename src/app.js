const express = require("express");
// const authRoutes = require("./routes/auth.route");


const app = express();
app.use(express.json());

// app.use("/api/auth", authRoutes);
app.use("/", (req,res)=>{
  res.json({
    message:"hogya / pr"
  })
})

module.exports = app;
