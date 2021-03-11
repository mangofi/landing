import './App.css';

import React from "react"
import ReactDOM from "react-dom"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Icons from './components/Icons';
import MangoLogo from './components/MangoLogo';

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			windowWidth: window.innerWidth
		}
	}

	handleResize = (e) => {
	  this.setState({ windowWidth: window.innerWidth });
	 };

	 componentDidMount() {
	  window.addEventListener("resize", this.handleResize);
	 }

	 componentWillUnmount() {
	  window.addEventListener("resize", this.handleResize);
	 }

	render(){
		const { windowWidth } = this.state;
		var inputs;
		if(this.state.windowWidth > 375){
			inputs = <Row><Col xl={9} sm={9}>
						<div id="mc_embed_signup_scroll">
					<Form.Control type="email" placeholder="Enter email address" />
						<div style={{position: "absolute", left: "-5000px", ariaHidden:"true"}}><input type="text" name="b_5f5408702a5f96c16cee493c4_6c532d6299" tabindex="-1" value=""/></div>
						</div>

			</Col>
			<Col xl={3} sm={3}>
			<div class="clear"><input type="submit" value="Notify me" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary"/></div>

			</Col>

		</Row>
	}else{
		inputs = <><Row><Col xs={12}>
							<div id="mc_embed_signup_scroll">
						<Form.Control type="email" placeholder="Enter email address" />
							<div style={{position: "absolute", left: "-5000px", ariaHidden:"true"}}><input type="text" name="b_5f5408702a5f96c16cee493c4_6c532d6299" tabindex="-1" value=""/></div>
							</div>
				</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<div class="clear"><input type="submit" value="Notify me" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary btnSubmit"/></div>
					</Col>
				</Row></>
	}

		return (
			<div class="bg-image">
          <div class="contenedor">
            <div className="container-text">
              <Row>
              <h1 class="mango-text">The new flavor of DeFi</h1>
              </Row>
              <Row>
              <p>Sign up for early access and launch updates</p>
              </Row>
              <Form action="https://mangofi.us1.list-manage.com/subscribe/post?u=5f5408702a5f96c16cee493c4&amp;id=6c532d6299" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							{inputs}
							</Form>
              <Icons ancho={this.state.windowWidth}/>
            </div>
						<MangoLogo ancho={this.state.windowWidth}/>
          </div>
        </div>
		)
	}
}

export default App
