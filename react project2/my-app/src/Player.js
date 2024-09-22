import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImg src={imageUrl} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>
          <p>Team: {team}</p>
          <p>Nationality: {nationality}</p>
          <p>Jersey Number: {jerseyNumber}</p>
          <p>Age: {age}</p>
        </CardText>
      </CardBody>
    </Card>
  );
};

Player.defaultProps = {
  name: '',
  team: '',
  nationality: '',
  jerseyNumber: 0,
  age: 0,
  imageUrl: ''
};

export default Player;