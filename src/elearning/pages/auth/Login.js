import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap';    
import {connect} from 'react-redux';
import {loginUserAC} from '../../../actions/authActions'

import './Register.css';

class Login extends Component {
    constructor(){
        super();
        this.state={
           
            email:"",
            password:"",
                         
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeHandler(e){
        console.log("the change ",e.target.email)
        this.setState({[e.target.name]:e.target.value});
       
        console.log("name is ",this.state.email)
    }
   onSubmit(e){
       e.preventDefault(e);
        const loginUser ={
            
            email:this.state.email,
            password:this.state.password,
           
        }
        console.log(loginUser)  
        this.props.loginUserAC(loginUser,this.props.history) ;     
   }
    render() {
       return (
            <div className="register">
          
            <Form>
                     <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Enter email" />
                
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}  placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={this.onSubmit}type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    registeredUserData : state.posts
})

export default connect(mapStateToProps,{loginUserAC})(Login);