import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'

// import { FilledInput } from '@mui/material';

import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'

import makeStyles from './style';
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  // console.log("form " , currentId,setCurrentId)
  const classes = makeStyles()
  const dispatch = useDispatch();
  const [psotData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tag: '',
    selectedFile: ""
  });
  const [UImessage, setUImessage] = useState({
    h6: "Create Memory",
    button: "ADD",
    button2: "CLEAR"

  })

  let post = useSelector(
    (state) => currentId ?
      state.posts.find((p) => p._id === currentId)
      : null
  )
  //  console.log("form",post)


  const onSubmitHandaler = (e) => {
    e.preventDefault()
    if (currentId) {

      dispatch(updatePost(currentId, psotData))

    } else {

      dispatch(createPost(psotData))
    }


    // console.log(psotData)
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
  const clearFormHandaler = () => {
    if (post) {
      setCurrentId(null)
      setUImessage({
        h6: "Create Memory",
        button: "ADD",
        button2: "CLEAR"
      })

      return setPostData({
        creator: "",
        title: "",
        message: "",
        tag: "",
        selectedFile: ""
      })
    } else {
      setPostData({
        creator: "",
        title: "",
        message: "",
        tag: "",
        selectedFile: ""

      })
    }


  }

  
  useEffect(
    () => {

      if (post) {

        setUImessage({
          h6: "Update Memory",
          button: "UPDATE",
          button2: "CANCEL"
        })

        return setPostData(post)
      }

    }, [post])


  return (
    <>
      <Paper className={classes.paper} >
        <form noValidate autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={onSubmitHandaler}>

          <Typography variant='h6'>
            {
              UImessage.h6
            }

          </Typography>

          <TextField
            className={classes.fileInput}
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={psotData.creator}
            onChange={(e) => setPostData({ ...psotData, creator: e.target.value })}
          // onChange={alert("lap")}
          />

          <TextField
            className={classes.fileInput}
            name='title'
            variant='outlined'
            label='Title'
            fullWidth
            value={psotData.title}
            onChange={(e) => setPostData({ ...psotData, title: e.target.value })}
          />

          <TextField
            className={classes.fileInput}
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
            value={psotData.message}
            onChange={(e) => setPostData({ ...psotData, message: e.target.value })}
          />



          <TextField
            className={classes.fileInput}
            name='tag'
            variant='outlined'
            label='Tags'
            fullWidth
            value={psotData.tag}
            onChange={(e) => setPostData({ ...psotData, tag: e.target.value })}
          />

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...psotData, selectedFile: base64 })}
            />




          </div>

          <Button className={classes.buttonSubmit} variant="contained" color='primary' size="large" fullWidth type='submit'>{

            UImessage.button
          }
          </Button>

          <Button className={classes.buttonClear} variant="contained" color='secondary' size="small" fullWidth onClick={clearFormHandaler}>{UImessage.button2}</Button>
        </form>

      </Paper>

    </>
  )
}

export default Form