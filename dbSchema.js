const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
let dbName='Authen';
let dbUrl=`mongodb+srv://Kundurthivenkatakishore:VpNeG7aEKBOvTIHD@cluster0.vvazd.mongodb.net/test?authSource=admin&replicaSet=atlas-1x8vnv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
module.exports={mongodb,MongoClient,dbUrl};