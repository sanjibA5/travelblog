const express=require('express');

const postRoute=express.Router();
const {getPost,createPost,updatePost} =require('../controllers/post')


postRoute.get('/',getPost);
postRoute.post('/',createPost);
postRoute.patch('/:id',updatePost)


module.exports={
    postRoute
}