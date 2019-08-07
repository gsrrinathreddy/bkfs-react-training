import axios from 'axios';
import {LOGGED_USER,REGISTER_USER} from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUserAC = (newUser,history)=>dispatch=>{
    // const url = "https://jsonplaceholder.typicode.com/posts"
    // // After setting the profile loading we start to make our requests through axios.
    console.log("I am uin RegusterAC",newUser) 
    axios.post('/api/users/register',newUser)
         .then(res =>
         dispatch({
            type:REGISTER_USER,
            payload:res.data
          })
          
        ).catch(err => console.log(err))
  
  }

  export const loginUserAC = (newUser,history)=>dispatch=>{
    // const url = "https://jsonplaceholder.typicode.com/posts"
    // // After setting the profile loading we start to make our requests through axios.
    console.log("I am uin LoginAC",newUser) 

    axios.post('/api/users/login',newUser)
         .then(res =>{
         console.log("IN loginAC",res)
          // Once the user gets logged in successfully, the server returns back a jwt-token. 
            // we will save the returned json jwt-token object in a const token.

            const {token} = res.data;
            // Let us set the received token to the localstorage
            // Note:- localStorage can only store strings. As the returned token is only a string we can store as it is.
            // we need not JSON.Stringify it.
            localStorage.setItem('jwtToken',token);
            console.log("Frontend token",token);
            
            // Now the next step is to set the Auth Header. Here we need to have that authorization in the header with the token.
            // so we will create a function called setAuthToken() in a seperate utils folder and call it.
           setAuthToken(token);
            // The token received from the sever cosists of the jwt expression along with the user information attached to it.
            // so in order to extract the user informtion from the token we have to decode the token. 
               // Now this decoded information is sent to setCurrentUser action. 
               const decoded = jwt_decode(token);
               console.log('the decoded value is', decoded)
               dispatch({
                   type:LOGGED_USER,
                   payload:decoded
               })

           
         }).catch(err => console.log(err))
  
  }