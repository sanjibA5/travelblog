import React,{useState} from 'react'
import {TextField,Button,Typography,Paper} from '@material-ui/core'

// import { FilledInput } from '@mui/material';

import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux'

import makeStyles from './style';
import {createPost} from '../../actions/posts'

const Form = () => {
  const classes=makeStyles()
  const dispatch= useDispatch();
  const [psotData,setPostData]=useState({
      creator: "",
      title: "",
      message: "",
      tag: '',
      selectedFile: "" 
  });
  const onSubmitHandaler= (e)=>{
    e.preventDefault()

   
    console.log(psotData)
    dispatch(createPost(psotData))
    setPostData(
      {
        creator: "",
        title: "",
        message: "",
        tag: "",
        selectedFile: "" 
  
      }

    )
    // alert("lap")
  
  }
  const clearFormHandaler=()=>{
    setPostData({
      creator: "",
      title: "",
      message: "",
      tag: "",
      selectedFile: "" 

    })

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
        value={psotData.title}
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
        name='tag'
        variant='outlined'
        label='Tags'
        fullWidth
        value={psotData.tag}
        onChange={(e)=>setPostData({...psotData,tag:e.target.value})}
      /> 

      <div className={classes.fileInput}>
           <FileBase 
          type="file"
          multiple={false}
          onDone={ ({ base64 })=>setPostData({...psotData, selectedFile:base64 }) }  
          />
         
        

          
      </div>

      <Button className={classes.buttonSubmit} variant="contained" color='primary' size="large" fullWidth type='submit'>Add</Button>
      
      <Button className={classes.buttonClear} variant="contained" color='secondary' size="small" fullWidth  onClick={clearFormHandaler}>Clear</Button>
    </form>

  </Paper>

  </>
  )
}

export default Form