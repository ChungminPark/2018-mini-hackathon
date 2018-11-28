import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Panels, Routable, Route} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import {SlideLeftArranger} from '@enact/ui/ViewManager';

import MenuPanel from '../views/MenuPanel';
import RecommandPanel from '../views/RecommandPanel';

import AppStateDecorator from './AppStateDecorator';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

const App = kind({
	name: 'App',

	propTypes: {
		onNavigate: PropTypes.func,
		path: PropTypes.string
	},

	handlers: {
		onFirstPanel: (ev, {onNavigate}) => onNavigate({path: '/first'}),
		onSecondPanel: (ev, {onNavigate}) => onNavigate({path: '/first/second'}),
		onThirdPanel: (ev, {onNavigate}) => onNavigate({path: '/first/third'}),
		onFourthPanel: (ev, {onNavigate}) => onNavigate({path: '/first/third/fourth'})
	},

	render: ({onFirstPanel, onFourthPanel, onNavigate, onSecondPanel, onThirdPanel, path, ...rest}) => {
		return (
			<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={onNavigate} path={path}>
				<Route path="first" component={MenuPanel} title="About Routable Panels Pattern" onClickRecommand={onSecondPanel}>
					<Route path="second" component={RecommandPanel} next="fourth" title="Second" onClick={onFourthPanel} />
				</Route>
			</RoutablePanels>
		);
	}
});

export default MoonstoneDecorator(
	AppStateDecorator(
		App
	)
);
