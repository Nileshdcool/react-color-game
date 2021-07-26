import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Badge } from 'reactstrap';
import Multiselect from 'multiselect-react-dropdown';



function App() {
  const [options, setOptions] = useState([{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }]);
  const [selectedValue, setSelectedValue] = useState([]);

  const onSelect = () => {

  }

  const onRemove = () => {

  }

  return (
    <div className="App" style={{margin:'30px'}}>
      <header className="App-header">
        <h1><Badge color="secondary">Board Game</Badge></h1>
        <Alert className="Alert-header" color="info">
          Inform the grid size and start the game!
        </Alert>
      </header>
      <Multiselect
        options={options} // Options to display in the dropdown
        selectedValues={selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
     
    </div>
  );
}

export default App;
