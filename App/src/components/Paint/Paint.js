import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Spottable from '@enact/spotlight/Spottable';

import css from './Paint.less';

const PaintBase = kind({
	name: 'Paint',

	propTypes: {
		children: PropTypes.string,
		index: PropTypes.number,
		onSelect: PropTypes.func,
		size: PropTypes.number
	},

	defaultProps: {
		size: 300
	},

	styles: {
		css,
		className: 'paint'
	},

	handlers: {
		onSelect: (ev, {index, onSelect}) => {
			if (onSelect) {
				onSelect({index});
			}
		}
	},

	computed: {
		url: ({index, size}) => {
			return `//loremflickr.com/${size}/${size}/painting?random=${index}`;
		}
	},

	render: ({children, onSelect, url, ...rest}) => {
		delete rest.size;
		delete rest.index;

		return (
			<div {...rest} onClick={onSelect}>
				<img src={url} />
				<div>{children}</div>
			</div>
		);
	}
});

const Paint = Spottable(PaintBase);

export default Paint;
export {Paint, PaintBase};
