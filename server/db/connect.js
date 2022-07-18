const mongoose=require('mongoose');

const DB_CONNECT=async (DB_connect_URL)=>{
    try {
      await  mongoose.connect(DB_connect_URL);
        console.log("db connected")
        
    } catch (error) {
        console.log(error)
        
    }
   
}


module.exports={
    DB_CONNECT
}