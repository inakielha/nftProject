const mongoose = require ("mongoose");
// require ("dotenv").config({path:'../../.env'});
// const test = require ("dotenv").config();
require ("dotenv").config();



const dbConnection = async ()=>{
    try {
        // console.log("HOOOOLAAAA",process.env.MONGO_CONNECTION,test)
        // await mongoose.connect(process.env.MONGO_CONNECTION || 'mongodb+srv://cantoTurtle:Argentina2845@cluster0.ji8z8jd.mongodb.net/test');
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Db connected")
    }catch(e){
        console.log(e,"db fail")
    }
}

module.exports = {
    dbConnection
}