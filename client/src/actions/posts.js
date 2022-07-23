import * as api from '../api/index';


//  action creator 

export const getPost = () => async (dispatch)=>{
    try {
        const {data}= await api.fetchPost();
        dispatch({type:'FETCH_ALL',payload:data});
        
    } catch (error) {
        console.log(error.message)
        
    }   
}