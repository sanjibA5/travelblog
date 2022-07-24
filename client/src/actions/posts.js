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
export const createPost=(post)=>async (dispatch)=>{
    try {
        const resposne = await api.createPost(post);
        console.log(resposne)
        console.log("from action psots")
        // console.log(message)
        dispatch({type:"CREATE_POST",payload:"saved"}) 
    } catch (error) {
        console.log(error.message)
        
    }


}