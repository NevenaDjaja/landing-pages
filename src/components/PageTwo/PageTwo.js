import React, { PropTypes, Component } from 'react';
import styles from './PageTwo.css';

class PageTwo extends Component {
	static propTypes = {}
	render() {
		const zipcode = this.props.location.query.zip;
		return (
			<div className={styles.pageTwo}>
				<div className={styles.header}>
					<h2>You are in!</h2>
					<h3>Thank you for signing up. We will let you know if you won!
					</h3>
				</div>
			</div>
		);
	}
}
module.exports = PageTwo;
