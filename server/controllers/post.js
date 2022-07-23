const {PostMessage} = require('../models/postMessage')



const getPost= async (req,res)=>{
    // get the post
   try {
    const postdata=await PostMessage.find()
    res.status(200).json({status:"success",data:postdata})
    
   } catch (error) {
    res.status(404).json({status:"failed","error":error.message})
    
   }

}
const createPost=async (req,res)=>{
    const postData= req.body;
   
  
    
    // if(Object.keys(postData).length==0){
    //      return res.status(500).json({status:"failed","error":"All the field must be declared"});

    // }
    try {
       const PostMessagedata = new PostMessage(postData)
        await PostMessagedata.save()

    return res.status(201).json({status:"saved", PostMessage});
   } catch (error) {
    return res.status(500).json({status:"failed","error":error.message});
   }

}

module.exports={
    getPost,
    createPost
}