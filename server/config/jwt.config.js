import jwt from "jsonwebtoken";
export const generateToken = (userId) => {
    const token = jwt.sign({userId : userId} , )
};
