import React from 'react';
import './Technology.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // def. icon
import posed from 'react-pose';

const startColor = '#B0B0B0';
export default function Technology({
  icon = faReact,
  text = 'Tech',
  color = '#FF0000'
}) {
  let PosedCard = posed(Card)({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      color: startColor,
      'border-color': startColor
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
      color: color,
      'border-color': color
    }
  });

  return (
    <PosedCard className='py-4 my-4'>
      <Card.Text>
        <FontAwesomeIcon icon={icon} className='icon' />
      </Card.Text>
      <Card.Title>{text}</Card.Title>
    </PosedCard>
  );
}
