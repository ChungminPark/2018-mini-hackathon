import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import Repeater from '@enact/ui/Repeater';
import Paint from '../components/Paint';

import css from './List.less';

const ListBase = kind({
	name: 'List',

	propTypes: {
		children: PropTypes.array,
		onSelectPaint: PropTypes.func
	},

	styles: {
		css,
		className: 'list'
	},

	render: ({children, onSelectPaint, ...rest}) => (
		<Panel {...rest}>
			<Repeater childComponent={Paint} indexProp="index" itemProps={{onSelect: onSelectPaint}}>
				{children}
			</Repeater>
		</Panel>
	)
});

export default ListBase;
export {ListBase as List, ListBase};
