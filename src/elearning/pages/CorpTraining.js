import React, { Component } from 'react'
import CardComponent from '../../components/CardComponent';
import data from '../../data';
export default class CorpTraining extends Component {
    render() {
        let courses = data.CorpTraining;
        console.log(courses)

        let comp = courses.map((course) => {
            return <CardComponent className="col-2" 
            title={course.title}
            desc={course.desc}
            durations={course.duration}
            faculty={course.faculty}
            />
        })
        return (
            <div className="row">
                  {comp}
              
            </div>
        )
    }
}
