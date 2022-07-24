import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const url="http://localhost:8000/api/v1";
export const fetchPost=()=>{
   return axios.get(`${url}/post`)
}

export const createPost=(newPost)=>{
   return axios.post(`${url}/post`,newPost)
}