import {FETCH_ALL,CREATE,UPDATE,DELETE,LIKE } from '../constants/actionTypes'

export default (posts = [],action)=>{
    console.log("reducer/postsrunning",action.type)
    
    switch (action.type) {
        
        case FETCH_ALL:
            // console.log("FETCH_ALL",action.type,action.payload)
            return action.payload;
            // break;
        case 'CREATE_POST' :
            return [...posts,action.payload];
            break   
    
        default:
            return posts
            break;
    }

}

