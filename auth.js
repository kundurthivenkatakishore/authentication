var bcrypt=require("bcryptjs");
var saltRound=10;
var hashPassword=async (pwd)=>{
    let salt=await bcrypt.genSalt(saltRound);
    let hash=await bcrypt.hash(pwd,salt);
    return hash;
}
module.exports={hashPassword};