import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
// import {getPost} from './actions/posts'
import {getPost} from '../../actions/posts'

const Home = () => {

    // const style=makeStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    // console.log("above use effect")
    useEffect(() => {
        dispatch(getPost())

    }, [dispatch])
    // console.log("last use effect")
    console.log("currentid", currentId)
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        {/* posts component */}
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* form components */}
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>

                </Grid>
            </Container>
        </Grow>
    )
}

export default Home