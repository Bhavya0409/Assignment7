import React, {Component} from 'react';
import {Form, FormGroup, Label, Col, Button, Input} from 'reactstrap';
import './App.scss';

class App extends Component {
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
		console.log('submitted!');
	};

	render() {
		console.log(this.state);
		const {username, search, message} = this.state;
		const isEnabled = username.trim().length > 0 && search.trim().length > 0 && message.trim().length > 0;
		return (
			<div className="App">

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

				{/*<form className="search-form">*/}
					{/*<div className="username">*/}
						{/*<p>Username:</p>*/}
						{/*<Input placeholder="username" />*/}
					{/*</div>*/}

					{/*<Button color="primary">primary</Button>{' '}*/}
				{/*</form>*/}
			</div>
		);
	}
}

export default App;
