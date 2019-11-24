import React from 'react';
import './Technology.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
//default icon
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Technology({ icon = faReact, text = 'Tech' }) {
  return (
    <div>
      <Card className='py-4 my-4'>
        <Card.Text>
          <FontAwesomeIcon icon={icon} className='icon' />
        </Card.Text>
        <Card.Title>{text}</Card.Title>
      </Card>
    </div>
  );
}
