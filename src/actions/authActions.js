import axios from 'axios';
import {REGISTER_USER} from './types';

export const registerUserAC = (newUser,history)=>dispatch=>{
    // const url = "https://jsonplaceholder.typicode.com/posts"
    // // After setting the profile loading we start to make our requests through axios.
    console.log("I am uin RegusterAC",newUser) 
    axios.post('/api/users/register',newUser)
         .then(res => history.push('/high-edu')
          
        ).catch(err => console.log(err))
  
  }