import React from 'react';
import './Project.scss';
import { Card } from 'react-bootstrap';
import posed from 'react-pose';

const PosedCard = posed(Card)({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  }
});
export default function Project({
  title = 'Project',
  desc = 'Desc',
  text = 'Text',
  image = require('../Images/project1.jpg')
}) {
  return (
    <PosedCard border='primary' className='text-dark bg-light m-3'>
      <Card.Body className='text-center'>
        <Card.Img src={image} alt='Picture' />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </PosedCard>
  );
}
