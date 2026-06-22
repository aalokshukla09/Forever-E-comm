import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";


export const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}


export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const userExists = await userModel.findOne({ email });

        if(userExists) {
            return res.status(400).json({ success : false, message : "User already exists" })
        }

        if(!validator.isEmail(email)){
            return res.json({ success:false, message: "Please enter a valid email" });
        }
        if(password.length < 8){
            return res.json({ success:false, message: "Please enter a strong password"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id)
        res.json({ success: true, token });


    } catch (error) {
        console.log(error);
        res.status(500).json({ success : false, message: "Internal Server Error" })
    }

}


export const loginUser = async (req, res) => {
    // res.status(200).json({message : "Login Successful"})
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if(!user) {
            return res.status(400).json({ success : false, message : "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(401).json({ success : false, message : "Invalid credentials" })
        }

        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success : false, message : error.message })
    }
}


export const adminLogin = async (req, res) => {

}


