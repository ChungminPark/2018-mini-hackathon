import {ActivityPanels} from '@enact/moonstone/Panels';
import Changeable from '@enact/ui/Changeable';
import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';

import Detail from '../views/Detail';
import List from '../views/List';

const Paints = [
	'오늘의 그림',
	'명화'
];

const AppBase = kind({
	name: 'App',

	propTypes: {
		index: PropTypes.number,
		Paint: PropTypes.number,
		onNavigate: PropTypes.func,
		onSelectPaint: PropTypes.func
	},

	defaultProps: {
		index: 0,
		Paint: 0
	},

	handlers: {
		onSelectPaint: (ev, {onNavigate, onSelectPaint}) => {
			if (onSelectPaint) {
				onSelectPaint({
					Paint: ev.index
				});
			}

			// navigate to the detail panel on selection
			if (onNavigate) {
				onNavigate({
					index: 1
				});
			}
		}
	},

	render: ({index, onNavigate, onSelectPaint, Paint, ...rest}) => (
		<div {...rest}>
			<ActivityPanels index={index} onSelectBreadcrumb={onNavigate}>
				<List onSelectPaint={onSelectPaint}>{Paints}</List>
				<Detail name={Paints[Paint]} index={index}/>
			</ActivityPanels>
		</div>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	Changeable({prop: 'Paint', change: 'onSelectPaint'},
		MoonstoneDecorator(AppBase)
	)
);

export default App;
export {App, AppBase};
