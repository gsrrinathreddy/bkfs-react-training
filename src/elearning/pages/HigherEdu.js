import React, { Component } from 'react'

export default class HigherEdu extends Component {
    componentDidMount(){
        console.log(" Hi I am mounted to the browser"+ new Date())
    }
    render() {
        console.log("Hi I ma render getting executed" + new Date());
        return (
            <div>
                I am Higher HigherEdu
            </div>
        )
    }
}
