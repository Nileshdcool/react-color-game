import { Row, Col } from "reactstrap"
import React from 'react';

export const CubeBlock: React.FC<any> = ({ data }) => {
    const { square, isBot, computerRemainingClicks, userRemainingClicks } = data;
    return (
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
            <Col>
                <h1>{isBot ? 'Computer is playing...' : 'Your turn'}</h1>
                <h1>{'Computer\'\s Remaining Clicks-' + computerRemainingClicks}</h1>
                <h1>{'Your Remaining Clicks-' + userRemainingClicks}</h1>
                <h1>{computerRemainingClicks == 0 && userRemainingClicks == 0 ? 'Game Over' : ''}</h1>
            </Col>
        </Row>
    )
}