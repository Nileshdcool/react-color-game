
import React, { useState } from 'react';
import { Badge, Alert } from 'reactstrap';
const Header = () => {
  return (
    <header className="App-header">
      <h1><Badge color="secondary">Board Game</Badge></h1>
      <Alert className="Alert-header" color="info">
        Inform the grid size and start the game!
      </Alert>
    </header>
  )
}

export default Header;
