const mongoose=require('mongoose');

const DB_CONNECT=async (DB_connect_URL)=>{
    try {
      await  mongoose.connect(DB_connect_URL,{useNewurlParser:true,useUnifiedTopology:true});
        console.log("db connected")
        
    } catch (error) {
        console.log(error)
        
    }
   
}
// mongoose.set("useFindAndModify",false)


module.exports={
    DB_CONNECT
}