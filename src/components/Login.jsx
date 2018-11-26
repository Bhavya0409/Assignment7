import React, {Component} from 'react';
import {connect} from "react-redux";

import {sendInitialData} from "../store/actions/actions";
import {Form, FormGroup, Label, Col, Input, Button} from 'reactstrap';

import './login.css';

const mapDispatchToProps = dispatch => {
	return {
		sendInitialData: (username, search, message) => {
			dispatch(sendInitialData(username, search, message));
		}
	}
};

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			search: '',
			message: ''
		}
	}

	updateUsername = (e) => {
		const username = e.target.value;
		this.setState({
			...this.state,
			username
		})
	};

	updateSearch = (e) => {
		const search = e.target.value;
		this.setState({
			...this.state,
			search
		})
	};

	updateMessage = (e) => {
		const message = e.target.value;
		this.setState({
			...this.state,
			message
		})
	};

	onSubmit = (e) => {
		e.preventDefault();
		const {username, search, message} = this.state;
		this.props.sendInitialData(username, search, message);
	};

	render() {
		const {username, search, message} = this.state;
		const isEnabled = username.trim().length > 0 && search.trim().length > 0 && message.trim().length > 0;
		return (
			<Form onSubmit={(e) => this.onSubmit(e)}>
				<FormGroup row>
					<Label for="username" sm={3}>Username</Label>
					<Col sm={9}>
						<Input type="text" name="username" id="username" onChange={(e) => this.updateUsername(e)} value={username}/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="search" sm={3}>Search</Label>
					<Col sm={9}>
						<Input type="text" name="search" id="search" onChange={(e) => this.updateSearch(e)} value={search}/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Label for="message" sm={3}>Message</Label>
					<Col sm={9}>
						<Input type="textarea" name="text" id="message" onChange={(e) => this.updateMessage(e)} value={message}/>
					</Col>
				</FormGroup>

				<FormGroup row>
					<Button color="primary" size="lg" block disabled={!isEnabled}>Submit</Button>
				</FormGroup>
			</Form>
		);
	}
}

export default connect(null, mapDispatchToProps)(Login);