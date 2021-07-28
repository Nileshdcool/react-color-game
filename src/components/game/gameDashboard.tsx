import { Container, Row, Col, Button } from "reactstrap"

export const GameDashboard: React.FC<any> = ({ data }) => {

    const { columns, setColumns, setLines, lines, startGame, start } = data;

    return (
        <>
            {data && <Container style={{ margin: '30px' }}>
                <Row>
                    <Col>No. of Columns - <input value={columns} placeholder="Columns" onChange={e => setColumns(e.target.value)} style={{ width: '65%' }} type="text"></input></Col>
                    <Col>No. of Lines - <input value={lines} placeholder="Lines" onChange={e => setLines(e.target.value)} style={{ width: '70%' }} type="text"></input></Col>
                    <Col> <Button onClick={startGame} style={{ width: '50%' }} color="primary">{start ? "Restart" : "Start"}</Button>{' '}</Col>
                </Row>
            </Container>}
        </>
    )
}