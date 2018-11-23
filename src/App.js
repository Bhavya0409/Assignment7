import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';

import Login from './components/Login';
import Main from './components/Main';

const mapStateToProps = state => {
	return {
		user: state.users.currentUser
	}
};

class App extends Component {
	render() {
		const {user} = this.props;
		return (
			<div className="App">
				{user.id === null ? <Login/> : <Main/>}
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(App);
