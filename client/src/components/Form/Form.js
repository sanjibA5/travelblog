import React,{useState} from 'react'
import {TextField,Button,Typography,Paper} from '@material-ui/core'

import makeStyles from './style'

const Form = () => {
  const classes=makeStyles()
  const [psotData,setPostData]=useState({
      creator: "",
      title: "",
      message: "",
      tag: '',
      selectedFile: "" 
  });
  const onSubmitHandaler= ()=>{
    alert("ii")
  
  }
  return (
  <>
  <Paper className={classes.paper} >
    <form noValidate autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={onSubmitHandaler}>

      <Typography variant='h6'>Creating a Memory</Typography>

      <TextField 
       className={classes.fileInput}
        name='creator'
        variant='outlined'
        label='Creator'
        fullWidth
        value={psotData.creator}
        onChange={(e)=>setPostData({...psotData,creator:e.target.value})}
        // onChange={alert("lap")}
      /> 

      <TextField 
       className={classes.fileInput}
        name='title'
        variant='outlined'
        label='Title'
        fullWidth
        value={psotData.message}
        onChange={(e)=>setPostData({...psotData,title:e.target.value})}
      /> 

      <TextField 
       className={classes.fileInput}
        name='message'
        variant='outlined'
        label='Message'
        fullWidth
        value={psotData.message}
        onChange={(e)=>setPostData({...psotData,message:e.target.value})}
      /> 

      

      <TextField 
       className={classes.fileInput}
        name='tags'
        variant='outlined'
        label='Tags'
        fullWidth
        value={psotData.tags}
        onChange={(e)=>setPostData({...psotData,tags:e.target.value})}
      /> 

      <Button >Add</Button>
    </form>

  </Paper>

  </>
  )
}

export default Form