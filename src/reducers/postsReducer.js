import {GET_POSTS,GET_COMMENTS} from '../actions/types';
const initialState = {   
    posts:{},
    comments:{}
}

export default function(state= initialState, action){
   
    switch(action.type) {
       case GET_POSTS : 
           return {
               ...state,               
               posts: action.payload
          }
          case GET_COMMENTS : 
          return {
              ...state,               
              comments: action.payload
         }
      
        default:
        return state;
       
    }
}  
