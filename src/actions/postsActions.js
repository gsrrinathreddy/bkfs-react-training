import axios from 'axios';
import {GET_POSTS,GET_COMMENTS,GET_IMAGES,GET_ALBUMS} from './types';

export const postsActionCreator = ()=>dispatch=>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    // After setting the profile loading we start to make our requests through axios.
    axios.get(url)
         .then(res => 
          dispatch({
            type:GET_POSTS,
            payload:res.data
          })
        ).catch(err => console.log(err))
  
  }