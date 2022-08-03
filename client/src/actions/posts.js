import * as api from '../api/index';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'
//  action creator 

export const getPost = () => async (dispatch)=>{
    // console.log("action/posts")
    try {
        const {data}= await api.fetchPost();
        // console.log(data)
        dispatch({type:FETCH_ALL,payload:data});
        
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
export const updatePost=(id,post)=>async(dispatch)=>{
    try {
       const {data}= await api.updatePost(id,post)
       dispatch({type:"UPDATE",payload:data})
    } catch (error) {
        console.log(error.message)
        
    }

}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id)
        dispatch({type:"DELETE",payload:id})
        
    } catch (error) {
        console.log(error)
        
    }
}

export const likePost=(id)=>async(dispatch)=>{
    try {
       const {data} =await api.likePost(id)
        dispatch({type:"LikePost",payload:data})
        
    } catch (error) {
        console.log(error)
        
    }
}