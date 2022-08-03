const express=require('express');

const postRoute=express.Router();
const {getPost,createPost,updatePost,deletePost,likePost} =require('../controllers/post')


postRoute.get('/',getPost);
postRoute.post('/',createPost);
postRoute.patch('/:id',updatePost)
postRoute.delete('/:id',deletePost)
postRoute.patch('/:id/likepost',likePost)

module.exports={
    postRoute
}