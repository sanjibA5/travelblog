import React from 'react'
import {useSelector} from 'react-redux'
import Post from './Post/Post'


const Posts = () => {
  const a = [1,2,3]
  const posts=useSelector((state)=>{
    return state.posts
  })

  console.log("from posts comp");
  console.log(posts.data)
  return (
    <>
    <h1>POSTS</h1>
    <Post/>
    </>
    
  )
}

export default Posts