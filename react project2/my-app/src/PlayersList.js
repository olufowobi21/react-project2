import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { players } from './players';

const PlayersList = () => {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;