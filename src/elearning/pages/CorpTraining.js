import React, { Component } from 'react'
import CardComponent from '../../components/CardComponent';
//import data from '../../data';
import './CorpTraining.css';
export default class CorpTraining extends Component {
    constructor(props){
        super(props);
        console.log("I am in Corp Training constructor " + new Date());
    }
    componentDidMount(){
        console.log("I am in Corp Training did mount " + new Date());
    }
    componentDidUpdate(){
        console.log("I am in Corp Training render " + new Date());
    }
    render() {
        
            console.log("I am in Corp Training render" + new Date());
      
        // let courses = data.CorpTraining;
        // console.log(courses)
        console.log("props",this.props.userStatus)
        let courses = this.props.data;

        // let comp = courses.map((course) => {
        //     if(this.props.userStatus === "false"){ return <CardComponent className="item" 
        //     title={course.title}
        //     desc={course.desc}
        //     durations={course.duration}
        //     faculty={course.faculty}
        //     />}
        //})
        return (
            <div className="row">
              
                
              
            </div>
        )
    }
}
