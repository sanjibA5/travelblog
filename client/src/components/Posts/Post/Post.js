import React from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Delete from '@material-ui/icons/Delete';  
import {useDispatch} from 'react-redux'
import {deletePost,likePost} from '../../../actions/posts';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment'
import makeStyles from './style'

const Post = ({post,setCurrentId}) => {

 const t =post.tag.map((t)=>`#${t} `) 
// tag showing need to be fixed -> when we create post it is shoeing error need to use set time out
 const dispatch=useDispatch()
 
  const classes=makeStyles()
  return (
    <Card className={classes.card}>
      
      <CardMedia className={classes.media} image={post.selectedFile}  title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size='small' onClick={()=> setCurrentId(post._id)} > <MoreHorizIcon fontSize="medium" />
         </Button>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' >{t} </Typography>

      </div>
        <Typography variant='h5' color='textSecondary' className={classes.title} gutterBottom>{post.title} </Typography>
      <CardContent>
        <Typography variant='body2'component="p" color='textSecondary' >{post.message} </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button color='primary' size='small' onClick={()=>dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize='small'/>Like {post.likeCount}
        </Button>

        <Button color='primary' size='small' onClick={()=>dispatch(deletePost(post._id))}>
          <Delete fontSize='small'/>Delete
        </Button>

      </CardActions>


    </Card>
  )
}

export default Post