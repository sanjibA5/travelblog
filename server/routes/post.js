const express=require('express');

const postRoute=express.Router();
const {getPost,createPost} =require('../controllers/post')


postRoute.get('/',getPost);
postRoute.post('/',createPost);


module.exports={
    postRoute
}