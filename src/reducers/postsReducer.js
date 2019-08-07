import {GET_POSTS,GET_COMMENTS,REGISTER_USER, LOGGED_USER} from '../actions/types';
const initialState = {   
    posts:{},
    comments:{},
    registerUserData:{},
    isAuthenticated:false,
    loggedUserData:{}
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
         case REGISTER_USER :
             return {
                 ...state,
                 registerUserData:action.payload
             }
         case LOGGED_USER:
             return {
                 ...state,
                 isAuthenticated:true,
                 loggedUserData:action.payload
             }    
        default:
        return state;
       
    }
}  
