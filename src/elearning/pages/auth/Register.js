import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap';    
import './Register.css';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            password:"",
            confirmPassword:""           
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeHandler(e){
        console.log("the change ",e.target.name)
        this.setState({[e.target.name]:e.target.value});
       
        console.log("name is ",this.state.name)
    }
   onSubmit(e){
       e.preventDefault(e);
        const newUser ={
            name: this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        console.log(newUser)
        
   }
    render() {
        return (
            <div className="register">
            <Form>
            <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="Enter your Name" />
                   
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  onChange={this.onChangeHandler} placeholder="Enter your Name" />
                   
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="Enter email" />
                
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}  placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChangeHandler} placeholder="Confirm Password" />
                </Form.Group>
               
                <Button variant="primary" onClick={this.onSubmit}type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
