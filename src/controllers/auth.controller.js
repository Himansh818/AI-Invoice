const express = require("express");
// const authModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = () =>{
  return res.status(200).json({
      success: true,
      message: "User registered !"})
}
const loginUser = () =>{
  return res.status(201).json({
      success: true,
      message: "User login !"})
}

module.exports = { registerUser, loginUser }
// const registerUser = async (req, res) => {
//   try {
//     const { username, email, password, role = "user" } = req.body;

//     const isUserAlreadyExists = await authModel.findOne({
//       $or: [
//         {
//           username,
//         },
//         {
//           email,
//         },
//       ],
//     });

//     if (isUserAlreadyExists) {
//       return res.status(401).json({
//         message: "User already exists !",
//       });
//     }

//     // password converted into hash with 10 salt rounds
//     const hash = await bcrypt.hash(password, 10);

//     const user = await authModel.create({
//       username,
//       email,
//       password: hash,
//       role,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "User registered !",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const loginUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const user = await authModel.findOne({
//       $or: [
//         {
//           username,
//         },
//         {
//           email,
//         },
//       ],
//     });
//     if (!user) {
//       return res.status(401).json({
//         message: "user not found !",
//       });
//     }

//     //pasowrd hash to compare form real hashed password

//     const isMatch = await bcrypt.compare(password, user.password);

//     //check password
//     if (!isMatch) {
//       return res.status(401).json({
//         message: "invalid password !",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: user._id,
//         role: user.role,
//       },
//       process.env.JWT_SECRET_KEY,
//     );

//     res.cookie("token", token);

//     res.status(201).json({
//       success: true,
//       message: "Login successfully",
//       user: user,
//       token,
//     });
//   } catch
//  (error) {
//     console.log(error);
//   }
// };

// module.exports = { registerUser, loginUser };
