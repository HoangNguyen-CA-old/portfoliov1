import React from 'react';
import './Project.scss';
import { Card } from 'react-bootstrap';

export default function Project({
  title = 'Project',
  desc = 'Desc',
  text = 'Text'
}) {
  return (
    <div className='p-3'>
      <Card>
        <Card.Body>
          <Card.Img></Card.Img>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{desc}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
