import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from './Card';

const mapStateToProps = state => {
	return {
		usersInfo: state.users
	}
};

class Main extends Component {
	render() {
		const {usersInfo} = this.props;
		const {users, currentUser} = usersInfo;
		return (
			<div className="row">
				{Object.keys(users).map(userId => {
					return <Card key={userId} user={users[userId]} currentUser={userId === currentUser.id}/>;
				})}
			</div>
		)
	}
};

export default connect(mapStateToProps)(Main);