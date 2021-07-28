import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap"
import React from "react"

export const GameConsole: React.FC<any>  = ({data}) => {
    const {dropdownOpen,toggle,color,squareColors,setColor,apply} = data;
    return (
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
        <Col> <Button onClick={apply} style={{ width: '50%' }} color="primary">Apply</Button>{' '}</Col>
      </Row>
    )
  }