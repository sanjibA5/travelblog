import React from 'react'
import {AppBar,Avatar,Button,Toolbar,Typography} from '@material-ui/core'
import memories from '../../img/memories.png'
import makeStyles  from './styles'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const style=makeStyles();
    const user=null;
    return (
        <div>
            <AppBar className={style.appBar} position='static' color='inherit'>
                <div className={style.brandContainer}>
                <Typography component={Link} to='/' className={style.heading} variant='h2' align='center'>Memories</Typography>
                <img className={style.image} src={memories} alt="memories" height="60" />
                </div>
                <Toolbar className={style.toolbar}>
                    {
                        user ?(
                            <div className={style.profile}>
                                <Avatar className={style.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={style.userName} variant="h6">{user.result.name}</Typography> 
                                <Button variant="contained" color='secondary' >Logout</Button>
                            </div>

                        ):(

                            <Button variant="contained" component={Link} to="/auth" color='primary' >Login</Button>
                            

                        )
                    }

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar