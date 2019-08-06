import React, { Component } from 'react'
import "./Movies.css"
import {Form} from "react-bootstrap"
export default class Movies extends Component {
    constructor(){
        super();

        this.state={
            total:15000,
            isCouponApplied:false
        }
        this.applyCoupon = this.applyCoupon.bind(this);
        this.removeCoupon  = this.removeCoupon.bind(this);
    }
    selectItem(e){
        console.log(e.target.length)
    }
    applyCoupon(){
        console.log(this.state.isCouponApplied)
        if(this.state.isCouponApplied === false){
            this.setState({
                total:this.state.total - 3000,
                isCouponApplied:true
            
            })
        }
       
    }

    removeCoupon(){
        if(this.state.isCouponApplied === true){
            this.setState({
                total:this.state.total + 3000,
                isCouponApplied:false
            })
        }
       
    }
    render() {
        console.log(this.state.isCouponApplied)
        return (
            <div className="movies">
              
              <div className="row">
                  <div className="col-6">
                  <p>Samsung : </p>
                  </div>
                  <div className="col-6">
                  <p> 5000 </p>
                  </div>
               
              </div>
              <div className="row">
                  <div className="col-6">
                  <p>Samsung : </p>
                  </div>
                  <div className="col-6">
                  <p> 5000 </p>
                  </div>
               
              </div>
              <div className="row">
                  <div className="col-6">
                  <p>Samsung : </p>
                  </div>
                  <div className="col-6">
                  <p> 5000 </p>
                  </div>
               
              </div>
              <button onClick={this.applyCoupon}>Apply Coupon</button>
              <button onClick={this.removeCoupon}>Remove Coupon</button>
             
              <div className="row">
                  <div className="col-6">
                  <p>Total </p>
                  </div>
                  <div className="col-6">
                  <p>{this.state.total} </p>
                  </div>
               
              </div>
            </div>
        )
    }
}
