import React, { PropTypes, Component } from 'react';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel } from 'react-bootstrap';
import styles from './LandingPage.css';
import $ from 'jQuery';

class LandingPage extends Component {
	static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      zipcode: '',
      entrycode: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setValue(key, event) {
    var state = {};
    state[key] = event.target.value;
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();
		let zip = this.state.zipcode;
    fetch('/newusers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        zipcode: this.state.zipcode,
        entrycode: this.state.entrycode
      })
    })
    .then(function(response) {
      window.location = "/results?zip=" + zip;
    }).catch(function(error) {
      console.log(error);
    });
  }

	render() {
		return (
			<div className={styles.landingPage}>
        <Form horizontal
          className={styles.form}
          id='landing-form'
          onSubmit={this.handleSubmit}
        >
          <h1>Win a ticket to Mars!</h1>
          <p>
            This is my cool landing page. Enter your email address to win
						a one-way ticket to Mars, when the giant rocket is ready :)
          </p>
          <FormGroup bsSize="large" controlId="formEmail" className={styles.formGroup}>
            <Col>
              <FormControl
                type="email"
                value={this.state.email}
                onChange={this.setValue.bind(this, 'email')}
                placeholder="Email"
              />
            </Col>
          </FormGroup>
          <FormGroup bsSize="large" controlId="formZip" className={styles.formGroup}>
            <Col>
              <FormControl
                type="text"
                placeholder="Zipcode"
                value={this.state.zipcode}
                onChange={this.setValue.bind(this, 'zipcode')}
              />
            </Col>
          </FormGroup>
          <FormGroup bsSize="large" controlId="formCode" className={styles.formGroup}>
            <Col>
              <FormControl
                type="text"
                placeholder="Entry Code"
                value={this.state.entrycode}
                onChange={this.setValue.bind(this, 'entrycode')}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Button
                bsSize="lg"
                type="submit"
                className={styles.submit}
              >
                Enter to win
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
		)
	}
}
module.exports = LandingPage;
