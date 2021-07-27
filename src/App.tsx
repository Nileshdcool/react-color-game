import { useState } from "react";
import { createMap, setOrigin } from "./components/game/tiles";
import { initialSelection, SelectColors } from "./components/colors";
import { Badge, Alert, Button, Col, Container, Row, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const App = () => {
  const [columns, setColumns] = useState<string | number>(6);
  const [lines, setLines] = useState<string | number>(6);
  const [start, setStart] = useState(false);
  const [square, setSquare] = useState<any>([]);
  const [color, setColor] = useState<string>("");
  const [squareColors, setSquareColos] = useState(initialSelection);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const startGame = () => {
    setStart(true);
    console.log(squareColors);
    setSquare(createMap(columns, lines, squareColors.map(i => i.id)));
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <>
              <div className="App" style={{ margin: '30px' }}>
                <header className="App-header">
                  <h1>Board Game <Badge color="secondary">New</Badge></h1>
                  <Alert className="Alert-header" color="info">
                    Inform the grid size and start the game!
                  </Alert>
                </header>
                <SelectColors onChange={setSquareColos}></SelectColors>
                <div style={{ textAlign: 'left' }}>Select the color</div>
              </div>
              <hr></hr>
              <Container style={{ margin: '30px' }}>
                <Row>
                  <Col>No. of Columns - <input value={columns} placeholder="Columns" onChange={e => setColumns(e.target.value)} style={{ width: '65%' }} type="text"></input></Col>
                  <Col>No. of Lines - <input value={lines} placeholder="Lines" onChange={e => setLines(e.target.value)} style={{ width: '70%' }} type="text"></input></Col>
                  <Col> <Button onClick={startGame} style={{ width: '50%' }} color="primary">{start ? "Restart" : "Start"}</Button>{' '}</Col>
                </Row>
              </Container>
              <hr></hr>
              {start && <div>
                <Container>
                  <Row>
                    <Col><>
                      <table className="game">
                        <tbody>
                          {square.map((l: any, key: number) => (
                            <tr key={key}>
                              {l.map((c: any, key: number) => (
                                <td key={key}
                                  style={{ backgroundColor: c.color }}
                                  className={c.origin ? " origin" : ""}
                                >
                                  <div></div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle style={{ width: '100%' }} caret>
                          {color ? color : 'Please Select Color'}
                        </DropdownToggle>
                        <DropdownMenu style={{ width: '100%' }}>
                          {squareColors.map((c: any, index: number) => (
                            <DropdownItem key={index} onClick={() => setColor(c.id)}>{c.name}</DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col> <Button onClick={() => {
                      var x = setOrigin(square, color);
                      setSquare(x);
                    }} style={{ width: '50%' }} color="primary">Apply</Button>{' '}</Col>
                  </Row>
                  <Row>
                    <p>Inform next color</p>
                  </Row>
                </Container>
              </div>}
            </>
          </Col>

        </Row>
      </Container>
    </>
  );
};
export default App;



