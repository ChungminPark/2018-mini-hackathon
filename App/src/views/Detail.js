import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

const genders = {
	m: 'Male',
	f: 'Female'
};

class DetailBase extends React.Component {
	constructor (props) {
		super(props);
	}

	static propTypes = {
		color: PropTypes.string,
		gender: PropTypes.string,
		name: PropTypes.string,
		weight: PropTypes.number,
		index: PropTypes.number
	}

	static defaultProps = {
		gender: 'm',
		color: 'Tabby',
		weight: 9
	}

	render () {
		return (
			<Panel {...this.props}>
				{this.props.name === "오늘의 그림" ? (
					<div>
						<div>Gender: {genders[this.props.gender]}</div>
						<div>Color: {this.props.color}</div>	
						<div>Weight: {this.props.weight}oz</div>
					</div>
				) : (
					<div />
				)}
			</Panel>
		);
	}
}

export default DetailBase;
export {DetailBase as Detail, DetailBase};
