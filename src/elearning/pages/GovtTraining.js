import React, { Component } from 'react'
import data from '../../data';
import CardComponent from '../../components/CardComponent';
export default class GovtTraining extends Component {
    render() {
        let courses = data.GovtTraining;
        return (
            <div>
               <CardComponent className="col-2" 
               title={courses[0].title}
               desc={courses[0].desc}
               durations={courses[0].duration}
               faculty={courses[0].faculty}
               />
                
            </div>
        )
    }
}
