import React from 'react'

import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core'
import memories from './img/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
// 43

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* post compnent */}
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
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