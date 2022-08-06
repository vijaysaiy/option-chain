import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//User Register route
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const check = await User.findOne({ email });
    if (!check) {
      const checkUsername = await User.findOne({ username });
      if (checkUsername) {
        return res.status(400).json("Username already exists!");
      }
      const user = new User({
        username,
        email,
        password,
      });
      //hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;
      //saving user to database
      const newUser = await user.save();
      res.status(200).json("Registered successfully");
    } else {
      res
        .status(400)
        .json("User with this email already exists. Please login.");
    }
  } catch (error) {
    console.log("ERROR IN REGISTERING THE USER ===>", error);
    return res.status(400).json("Error in registering the user");
  }
};

export const testnifty = (req,res) => {
  try {
    return 143;
  } catch (error) {
    
  }
}

//User Login route
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    // console.log("USER ===>", findUser);
    if (findUser) {
      const match = await bcrypt.compare(password, findUser.password);
      if (match) {
        //Generate a token and send token and user as response to the client
        let token = jwt.sign({ _id: findUser._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        const { password, createdAt, updatedAt, ...user } = findUser._doc;
        // console.log(userInfo);
        res.status(200).json({ token, user });
      } else {
        res
          .status(400)
          .json("Incorrect password! Check your password and try again.");
      }
    } else {
      res
        .status(400)
        .json("User doesn't exists with this email. Please register.");
    }
  } catch (error) {
    console.log("ERROR IN USER LOGIN ===>", error);
    res.status(400).json("Error in user login. Please try login again.");
  }
};
