import React, {Component, Fragment} from 'react';
import { Card as BootstrapCard, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Card extends Component {
	render() {
		const {user} = this.props;
		return (
			<Fragment>
				<BootstrapCard className="col-sm-6 col-md-4 col-lg-3">
					<CardImg top width="100%" src={user.img} alt="Card image cap" />
					<CardBody>
						<CardTitle>User: {user.username}</CardTitle>
						<CardSubtitle>Search: {user.search}</CardSubtitle>
						<CardText>Message: {user.message}</CardText>
					</CardBody>
				</BootstrapCard>
			</Fragment>
		)
	}
}

export default Card;