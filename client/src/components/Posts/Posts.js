import React from 'react'
import {useSelector} from 'react-redux'
import {Grid,CircularProgress} from '@material-ui/core'

import Post from './Post/Post'

import makeStyles from './style';


const Posts = () => {
  const pickachu=[
    {
        "_id": "62db8dfd4db1fd45dc3c7e11",
        "title": "LAP",
        "message": "test message",
        "creator": "ami",
        "tag": [
            "#follow"
        ],
        "selectedFile": "test.jpg",
        "likeCount": 0,
        "createdAt": "2022-07-23T05:58:16.680Z",
        "__v": 0
    },
    {
      "_id": "62dd5de299ea13613f41d452",
      "title": "test3 title",
      "message": "test message",
      "creator": "test3",
      "tag": [
          "#anytag"
      ],
      "selectedFile": "",
      "likeCount": 0,
      "createdAt": "2022-07-23T15:10:14.216Z",
      "__v": 0
    }
  ]

  const classes=makeStyles()
  
  // const posts=useSelector((state)=>{
  //   return state.posts
  // })

  // console.log("from posts comp");
  // console.log(posts.data)
  return (
    !pickachu.length?<CircularProgress />:(
      <Grid className={classes.mainContainer} alignItems="stretch" container spacing={3}>
        {
          pickachu.map( (post)=> {
            return (

              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} /> 

              </Grid>
            )
          })
          
        }

      </Grid>
    )
    
  )
}

export default Posts

// <Grid key={post._id} >
//               <Post post={post} />
//               <Grid/>
