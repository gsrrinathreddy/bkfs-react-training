import React from 'react'
import {Card,Button} from 'react-bootstrap';

export default function CardComponent(props) {
    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                    {props.title}
                    </Card.Title>
                    <Card.Text>
                   {props.desc}
                    </Card.Text>
                    <Card.Text>
                   duration: {props.duration}
                    </Card.Text>
                    <Card.Text>
                   Faculty: {props.faculty}
                    </Card.Text>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
