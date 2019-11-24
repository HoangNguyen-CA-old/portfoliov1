import React from 'react';
import './Project.scss';
import { Card } from 'react-bootstrap';
//import image from '../Images/project1.jpg';

export default function Project({
  title = 'Project',
  desc = 'Desc',
  text = 'Text',
  image = require('../Images/project1.jpg')
}) {
  return (
    <div className='py-3'>
      <Card border='primary' className='text-dark bg-light'>
        <Card.Body className='text-center'>
          <Card.Img src={image} alt='Picture' />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{desc}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
