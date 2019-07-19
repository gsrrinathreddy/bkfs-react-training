import React, { Component } from 'react'
import './Layout.css'
import {Button} from 'react-bootstrap';
import CardComponent from '../../components/CardComponent';

export default class LandingPage extends Component {
    constructor(){
        super();
        this.state = {
            counter:0 ,
            seats:300,
            slectedSeats:0,
           
        }
    

      this.decrementHandler = this.decrementHandler.bind(this);
      this.incrementHandler = this.incrementHandler.bind(this);
      this.confirm = this.confirm.bind(this);
      this.resetCounter = this.resetCounter.bind(this);
    }
    decrementHandler(){
        this.setState({
            counter: --this.state.counter
        })
    }
    incrementHandler(){
       
        this.setState({
            counter: ++this.state.counter
        })

    }
    resetCounter(){
        this.setState({
            counter:0
        })
    }
    confirm(){
        this.setState({
            seats : this.state.seats - this.state.counter
        })
    }
    render() {
        return (
            <div>
            <div className="row">
                <h1>Hi Hello</h1>
                <Button onClick={this.decrementHandler} variant="primary" size="lg" >
                         decrement
                </Button>
                <h1>{this.state.counter}</h1>
                <Button onClick={this.incrementHandler} variant="primary" size="lg" >
                        increment
                </Button>
              
                
                 <button onClick={this.confirm}>Confirm the seats</button>
                <div>
                    <h4>Total Seats : {this.state.seats}</h4>
                </div>

               
            </div>
             <CardComponent reset={this.resetCounter} title={this.state.counter} desc="For me state is confusing"/>
             </div>
        )
    }
}
