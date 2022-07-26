import React from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Delete from '@material-ui/icons/Delete';  
import MoreHoriz from '@material-ui/icons/MoreHoriz';  
import moment from 'moment'
import makeStyles from './style'

const Post = ({post}) => {

 const t =post.tag.map((t)=>`${t} `) 
// tag showing need to be fixed -> when we create post it is shoeing error need to use set time out

 
  const classes=makeStyles()
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile}  title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size='small' onClick={()=>{}}></Button>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' >{t} </Typography>

      </div>
      <CardContent>
        <Typography variant='h5' color='textSecondary' className={classes.title} gutterBottom>{post.message} </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button color='primary' size='small' onClick={()=>{}}>
          <ThumbUpAltIcon fontSize='small'/>Like {post.likeCount}
        </Button>

        <Button color='primary' size='small' onClick={()=>{}}>
          <Delete fontSize='small'/>Delete
        </Button>

      </CardActions>


    </Card>
  )
}

export default Post