import React from 'react'
import {Card,Button} from 'react-bootstrap';

export default function CardComponent(items) {
    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                    {items.title}
                    </Card.Title>
                    <Card.Text>
                   {items.desc}
                    </Card.Text>
                    <Card.Text>
                   duration: {items.duration}
                    </Card.Text>
                    <Card.Text>
                   Faculty: {items.faculty}
                    </Card.Text>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
