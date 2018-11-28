import Button from '@enact/moonstone/Button';
import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

import RouteTree from './RouteTree';

const RecommandPanel = kind({
	name: 'RecommandPanel',

	propTypes: {
		next: PropTypes.string,
		onClick: PropTypes.func,
		title: PropTypes.string
	},

	computed: {
		text: ({next}) => `To ${next} Panel`
	},

	render: ({title, onClick, text, ...rest}) => {
		delete rest.next;
		return (
			<Panel {...rest}>
				{/* <Header title={title} />
				<RouteTree /> */}
				<BackgroundSlideshow images={[image1, image2]} animationDelay={2000}/> 
				<Button onClick={onClick}>{text}</Button>
			</Panel>
		);
	}
});

export default RecommandPanel;
