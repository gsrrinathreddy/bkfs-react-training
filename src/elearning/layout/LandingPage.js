import React, { Component,useState} from 'react'
import './Layout.css'
import {Button} from 'react-bootstrap';
import CardComponent from '../../components/CardComponent';

export default function LandingPage()  {
    
      const [counter,setCounter] = useState(0)  
      const [seats,setSeats] = useState(300) 
      const [selectedSeats,setselectedSeats] = useState(0)  
      const [isSeatSelected,setIsSeatSelected] = useState(false);
      const [stringValue,setStringValue] = useState("I am Hooks");
      const [arrayValue,setArrayValue] = useState([4,6]);
      const [objectValue,setObjectValue] = useState({name:"hooks"});
  

    console.log("the counter value is",counter)
    console.log("the seats value is",seats)    
    console.log("the selected Seats value is",selectedSeats)  
    console.log("the isSeatSelected value is",isSeatSelected)  
    console.log("the stringValue value is",stringValue) 
    console.log("the arrayValue value is",arrayValue) 
    console.log("the objectValue value is",objectValue)    
     
    
    
    function decrementHandler(a){
       console.log("dh",a)
       setCounter(counter+1)
       console.log("the counter value is",counter)   
       
       setIsSeatSelected(true)
       console.log("the boolean value is",isSeatSelected)  
       
       setArrayValue([5,6])
       console.log("the arrayValue value is",arrayValue)  
    }

  
        return (
            <div>
            <div className="row">
                <h1></h1>
              
               
            </div>
           
             </div>
        )
    
}
