import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const url="http://localhost:8000/api/v1";
export const fetchPost= () => axios.get(`${url}/post`)


export const createPost=(newPost)=>{
   return axios.post(`${url}/post`,newPost)
}
export const updatePost=(id,updatedData)=>{
   return axios.patch(`${url}/post/${id}`,updatedData)
}
export const deletePost=(id)=>{
   return axios.delete(`${url}/post/${id}`)
}
export const likePost=(id)=>{
   return axios.patch(`${url}/post/${id}/likepost`)
}