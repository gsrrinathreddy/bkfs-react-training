import React, { Component } from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap';
export default class HigherEdu extends Component {
    constructor(){
        super();
            this.state={
                comments:[]
            }
    }
    componentDidMount(){
         console.log("before axios didmount executed" + new Date());
        const url = "https://jsonplaceholder.typicode.com/comments"
        axios.get(url)
             .then(res => {
                // console.log("I am in then of axios" + new Date(), res.data)
                 this.setState({comments:res.data})
             })
             .catch(err=> console.log("error",err));
     //   console.log("after axios"+ new Date())
    }
    componentDidUpdate(){
        console.log("I am didUpdate executed" + new Date());
    }
    getData(resource){
        const url = `https://jsonplaceholder.typicode.com/${resource}`
        axios.get(url)
             .then(res => {
                 console.log("I am in then of axios" + new Date(), res.data)
                 this.setState({comments:res.data})
             })
             .catch(err=> console.log("error",err));
        
    }

    componentWillUnmount(){
        console.log("Higher Edu is unmounted")
    }
    render() {
       // console.log("Hi I ma render getting executed" + new Date());
        const element = this.state.comments.map(comment => {
            return (
                <li>{comment.name}</li>
            )
        })
        return (
            <div>
                I am Higher HigherEdu
                <Button onClick={()=>this.getData("posts")}>Get Posts</Button>
                <Button onClick={()=>this.getData("albums")}>Get Albums</Button>
                <Button onClick={()=>this.getData("images")}>Get Images</Button>
                {element}
                
            </div>
        )
    }
}
