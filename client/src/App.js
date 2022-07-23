import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core'
import memories from './img/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import {getPost} from './actions/posts'

import makeStyles  from './styles'
// 43

// https://www.youtube.com/watch?v=VsUzmlZfYNg&t=2740s&ab_channel=JavaScriptMastery

const App = () => {
  const style=makeStyles();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPost())

  },[dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={style.appBar} position='static' color='inherit'>
        <Typography className={style.heading} variant='h2' align='center'>Memories</Typography>
        <img  className={style.image} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
             {/* posts component */}
             <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
                {/* form components */}
                <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App