import BodyText from '@enact/moonstone/BodyText';
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import PropTypes from 'prop-types';
import React from 'react';
import Scroller from '@enact/moonstone/Scroller';

import FlexView from 'react-flexview';
import RecommandArt from '../components/RecommandArt'
import FindArt from '../components/FindArt'

// const example =
// `<RoutablePanels {...rest} arranger={SlideLeftArranger} onBack={onNavigate} path={path}>
// 	<Route path="first" component={MenuPanel} title="First" onClick={onSecondPanel}>
// 		<Route path="second" component={RecommandPanel} title="Second" onClick={onFourthPanel} />
// 		<Route path="third" component={RecommandPanel} title="Third" onClick={onFirstPanel}>
// 			<Route path="fourth" component={RecommandPanel} title="Fouth" onClick={onThirdPanel} />
// 		</Route>
// 	</Route>
// </RoutablePanels>`;

const MenuPanel = kind({
	name: 'MenuPanel',

	propTypes: {
		onClickRecommand: PropTypes.func,
		onClickFind: PropTypes.func,
		title: PropTypes.string
	},

	render: ({title, onClickRecommand, onClickFind, ...rest}) => (
		<Panel {...rest}>
			{/* <Header title={title}>
				<Button onClick={onClick}>To Second Panel</Button>
			</Header> */}

			<div className="App" style={{flexDirection: 'row', justifyContent : 'space-between'}}>
        {/* <Lunacall></Lunacall> */}

        <FlexView vAlignContent='center' hAlignContent='center'>
          <Button onClick={onClickRecommand}>
						<RecommandArt />
					</Button>

					<Button onClick={onClickFind}>
          	<FindArt />
					</Button>
        </FlexView>
      </div>
		</Panel>
	)
});

export default MenuPanel;
