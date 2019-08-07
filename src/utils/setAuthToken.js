import axios from 'axios';

const setAuthToken = token => {
    if(token){
        // If the token exists, apply the token to the authorization header for every request the user makes
        axios.defaults.headers.common['Authorization'] = token;
    }else{
        // if the token does not exist, then delete the authorization header.
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;