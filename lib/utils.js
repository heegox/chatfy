import jwt from "jsonwebtoken";

// Function to genterate a token for a user

export const genterateToken = (userId)=> {
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    return token;
}