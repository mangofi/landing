import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Icons(props){

  return (
    <Row className="icons" style={{marginTop:"14px"}}>

    {props.ancho <376 ? <Col xs={3}></Col> : ""}
      <Col xl={1} sm={2} xs={2}>
        <a href="https://t.me/mango_fi" target="_blank">
        <FontAwesomeIcon icon={[ 'fab' , 'telegram-plane']} size="2x" /></a>
      </Col>
      <Col xl={1} sm={2} xs={2}>
      <a href="https://twitter.com/fi_mango" target="_blank">
        <FontAwesomeIcon icon={[ 'fab' , 'twitter']} size="2x" />
        </a>
      </Col>
      <Col xl={1} sm={2} xs={2}>
      <a href="#">
        <FontAwesomeIcon icon={[ 'fab' , 'medium']} size="2x" />
        </a>
      </Col>
    </Row>
	)
}

export default Icons
