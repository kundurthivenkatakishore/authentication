var express = require('express');
const app=express();
app.use(express.json());
var router = express.Router();
var {mongodb,MongoClient,dbUrl}=require("../dbSchema");
var {hashPassword}=require("../auth");
const { rethrow } = require('jade/lib/runtime');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',async(req,res)=>{
  const client=await MongoClient.connect(dbUrl);
  try{
    let db=await  client.db('Authen');
    let user=db.collection('users').find({email:req.body.email});

    if(user.length>0){
      res.json({
        "status":400,
        "message":"User already exists"
      })
    }
    else{
      let hashedPassword=await hashPassword(req.body.password);
      res.body.password=hashedPassword;
      let user=await db.collection('users').insertOne(req.body);
      req.json({
        hashedPassword,
        statusCode:200,
        message:"User Signup Successfully"
      })
    }
  }
  catch(error){
    res.json({
      statusCode:500,
      message:"Internal Server Error"
    })
  }
})
module.exports = router;
