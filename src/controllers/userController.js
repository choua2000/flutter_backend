import { generateToken } from "../middlewares/verifyToken.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
class useerController { 
   static async register(req, res) {
    try {
        const { name, email, password, age, gender, address } = req.body;
        //MEAN: check required fields
        if(!name || !email || !password || !age || !gender  || !address) {
            return res.status(400).json({message: "All fields are required"});
        }
        //MEAN: check email exists
        const checkEmail = await User.findOne({email});
        if(checkEmail) {
            return res.status(400).json({message: "Email already exists"});
        }//MEAN: hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            age,
            gender,
            address
        }); 
        // console.log(user);
        await user.save();
        return res.status(200).json({message: "User created successfully", data:user});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
   }
   static async login(req, res) {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }
        //MEAN: check email exists
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
        //MEAN: check password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid password"});
        }
        const payload = {
           user:{
                _id: user._id,
                email: user.email,
                role: user.role,
                password: user.password
           }
            
        }
        //MEAN: generate token
        const accessToken = await generateToken(payload);
        return res.status(201).json({message: "Login successful", accessToken});
    } catch (error) {
        
    }
   }
   
   static async getUsers(req, res) {
    try {
        const users = await User.find();
        return res.status(200).json({success: true, menubar: "Users List all",users});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
   }
   static async updateUser(req, res) {
       const {id} = req.params;
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }
        const user = await User.findById({_id: id});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.name = name;
        user.email = email;
        user.password = hashedPassword;
        await user.save();
        return res.status(201).json({message: "User updated successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
   }
   static async deleteUser(req, res) {
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete({_id: id});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
    
        return res.status(201).json({message: "User deleted successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
   }
   static async getUserById(req, res) {
    const {id} = req.params;
    try {
        const user = await User.findById({_id: id});
        if(!user) {
            return res.status(400).json({message: "User not found"});
        }
        return res.status(200).json({success: true, menubar: "User get successfully",user});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
   }
}
export default useerController
