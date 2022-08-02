import React from 'react'
import {Grid,CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'

import Post from './Post/Post'

import makeStyles from './style';


const Posts = ({setCurrentId}) => {
 


  const classes=makeStyles()
  
  const posts=useSelector((state)=>  state.posts )

  // console.log("from posts comp");


  return (
    <Grid className={classes.mainContainer} alignItems="stretch" container spacing={3}>

      {
        !posts.length?<CircularProgress />:(
          
          posts.map((post)=>{
            
            return(
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId}/> 

              </Grid>

            )
          })
          
        )
      }
 
    </Grid> 
   
    
  )
}

export default Posts




/*
 !posts.data.length?<CircularProgress />:(
      <Grid className={classes.mainContainer} alignItems="stretch" container spacing={3}>
        {
          posts.data.map( (post)=> {
            return (

              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={posts.data} /> 

              </Grid>
            )
          })
          
        }

      </Grid>
    )
*/

