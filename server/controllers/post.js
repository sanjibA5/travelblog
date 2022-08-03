const { PostMessage } = require('../models/postMessage')



const getPost = async (req, res) => {
    // get the post
    try {
        const postdata = await PostMessage.find()
        res.status(200).json(postdata);

    } catch (error) {
        res.status(404).json({ status: "failed", "error": error.message })

    }

}
const createPost = async (req, res) => {
    const postData = req.body;



    // if(Object.keys(postData).length==0){
    //      return res.status(500).json({status:"failed","error":"All the field must be declared"});

    // }
    try {
        const PostMessagedata = new PostMessage(postData)
        await PostMessagedata.save()

        return res.status(201).json({ message: "saved", data: PostMessagedata });
    } catch (error) {
        return res.status(500).json({ status: "failed", "error": error.message });
    }

}

const updatePost = async (req, res) => {
    try {
        // console.log(req.params.id)
        const { params, body } = req;

        // console.log(params.id, body)
        //    await PostMessage.findByIdAndUpdate(params.id,body,function (err,docs){
        //     if(err){
        //         console.log("under if")
        //         console.log("error",err)
        //         return res.send("error")
        //     }else{
        //         console.log("docs",docs)
        //         console.log("under else")
        //        return res.json(docs)
        //     }

        //    })
        const data = await PostMessage.findOneAndUpdate({ _id: params.id }, body, { new: true })
        res.json(data)

    } catch (error) {

        return res.send(error.message)

    }

}

const deletePost = async (req, res) => {
    const { params } = req;
    // console.log(params)
    try{

        const userid=params.id
       const doc= await PostMessage.findOneAndRemove(userid)
       if (doc) res.json({message:"Deleted"})
       else res.json({message:"no exist"})
        
    }catch (error){
        console.log(error)
        console.log(error.message)
        res.json({"message":false})
    }
     
}

const likePost=async(req,res)=>{
    try {
        const {id}=req.params
        let post=await PostMessage.findById(id)
        // console.log("before save", post.likeCount)
        post.likeCount=post.likeCount+1
        await post.save()
        // console.log("after save", post.likeCount)
        // console.log(post.likeCount)
        res.json(post)
        
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }

}

module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost
}