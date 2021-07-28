import { useEffect, useState } from "react";
import { initialSelection } from "./components/colors";
import { Col, Container, Row } from "reactstrap";
import ColorService from "./services/color.service";
import { GameInfo } from "./components/game/gameInfo";
import { GameDashboard } from "./components/game/gameDashboard";
import { CubeBlock } from "./components/game/cubeBlock";
import { GameConsole } from "./components/game/gameConsole";


const App = () => {
  const [columns, setColumns] = useState<string | number>(6);
  const [lines, setLines] = useState<string | number>(6);
  const [start, setStart] = useState(false);
  const [square, setSquare] = useState<any>([]);
  const [color, setColor] = useState<string>("");
  const [squareColors, setSquareColos] = useState(initialSelection);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [isBot, setIsBot] = useState(false);
  const [userRemainingClicks, setUserRemainingClicks] = useState(5);
  const [computerRemainingClicks, setComputerRemainingClicks] = useState(5);
  const [colorOptions, setColorOptions] = useState([]);

  const startGame = () => {
    const data = {
      columns,
      lines,
      colors: squareColors.map(i => i.id)
    }
    ColorService.createMap(data).then((c) => {
      setStart(true);
      setSquare(c.data);
    });
  };

  useEffect(() => {
    ColorService.getAllColors().then(c => {
      setColorOptions(c);
    })
  }, []);

  useEffect(() => {
    if (isBot) {
      setTimeout(() => {
        apply();
      }, 3000);
    }
  }, [isBot])

  const apply = () => {
    if (!color) return;
    const randomColor = squareColors[Math.floor(Math.random() * squareColors.length)].id;
    const data = {
      square,
      color: isBot ? randomColor : color
    }
    ColorService.setOrigin(data).then((c) => {
      if (isBot) {
        setComputerRemainingClicks(computerRemainingClicks - 1);
        setColor(randomColor)
      } else {
        setUserRemainingClicks(userRemainingClicks - 1);
      }
      setSquare(c.data);
      setIsBot(!isBot);
    })
  }

  const renderGameInfo = () => {
    return (
      <>
        {<GameInfo colorOptions={colorOptions} setSquareColos={setSquareColos}></GameInfo>}
      </>
    )
  }

  const renderGameDashboard = () => {
    const data = {
      columns,
      setColumns,
      lines,
      setLines,
      startGame,
      start
    }
    return (
      <>
        <GameDashboard data={data}></GameDashboard>
      </>
    )
  }

  const renderCubeBlock = () => {
    const data = {
      square, isBot, computerRemainingClicks, userRemainingClicks
    }
    return (
      <CubeBlock data={data}></CubeBlock>
    )
  }

  const renderGameConsole = () => {
    const data = {
      dropdownOpen,
      toggle,
      color,
      squareColors,
      setColor,
      apply
    }
    return (
      <GameConsole data={data}></GameConsole>
    )
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <>
              {renderGameInfo()}
              <hr></hr>
              {renderGameDashboard()}
              <hr></hr>
              {start && <div>
                <Container>
                  {renderCubeBlock()}
                  {renderGameConsole()}
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