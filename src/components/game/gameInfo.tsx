import React from "react";
import { Badge, Alert } from "reactstrap";
import { SelectColors } from "../colors";

export const GameInfo: React.FC<any> = ({ setSquareColos, colorOptions }) => {
    return (
        <div className="App" style={{ margin: '30px' }}>
            <header className="App-header">
                <h1>Board Games <Badge color="secondary">New</Badge></h1>
                <Alert className="Alert-header" color="info">
                    Inform the grid size and start the game!
                </Alert>
            </header>
            <SelectColors colorOptions={colorOptions}  onChange={setSquareColos}></SelectColors>
            <div style={{ textAlign: 'left' }}>Select the color</div>
        </div>
    )
}