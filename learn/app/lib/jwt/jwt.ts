import jwt from "jsonwebtoken";

const SECRECT = "test@123"; // in production, use env variable

interface generateTokenObject {
   email: string,
   username: string,
}

export const generateToken = (payload: generateTokenObject): string =>{
   let jwtToken = jwt.sign(payload, SECRECT, {expiresIn: "1h"});
   return jwtToken;
}

export const verifyJwtToken = (token: string) => {
   let jwtverifyRes = jwt.verify(token,SECRECT);
   console.log(jwtverifyRes);
   return jwtverifyRes;
}