import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap';
import axios from 'axios'
const  SoftwareTraining = () => {

    const [comments,setComments] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/comments"
    const fetchComments = () => {
        console.log("fetch comments")
        axios.get(url)
             .then(response => {
            setComments(response.data);// this.setState({comments:respons.data})/
          })
          .catch(err => console.log(err));
      };
    
    useEffect(fetchComments,[]);

    const elements = (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.name}</li>
          ))}
        </ul>
      );
    
    return (
        <div>
            Hi Welcome to software courses
            <Button onClick={()=>this.getData("posts")}>Get Posts</Button>
                <Button onClick={()=>this.getData("albums")}>Get Albums</Button>
                <Button onClick={()=>this.getData("images")}>Get Images</Button>
            {elements}
        </div>
    )
}

export default SoftwareTraining;
