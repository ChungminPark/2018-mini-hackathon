import Changeable from '@enact/ui/Changeable';
import Group from '@enact/ui/Group';
import Item from '@enact/moonstone/Item';
import kind from '@enact/core/kind';
import Layout, {Cell} from '@enact/ui/Layout';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import ScrollerComponent from '@enact/moonstone/Scroller';
import ViewManager from '@enact/ui/ViewManager';
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import FlexView from 'react-flexview';

import RecommandArt from '../components/RecommandArt'
import FindArt from '../components/FindArt'

// import Lunacall from '../views/Lunacall'
import css from './App.less';
import View from './View';

const views = [
  {title: 'Recommand Art', view: RecommandArt},
  {title: 'Find Art', view: FindArt}
]

const AppBase = kind({
  name: 'App',

  styles: {
		css,
		className: 'app'
  },
  
  computed: {
    handleChange: ({onChange}) => ({selected}) => {
			onChange({index: selected});
		}
  },

  render: ({handleChange, index, ...rest}) => {
    delete rest.onChange;

    return (
      <Layout {...rest}>
        <Cell component={ScrollerComponent} size="20%">
          <Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={handleChange} select={'radio'} selected={index}>
            {views.map((view) => view.title)}
          </Group>
        </Cell>
        <Cell component={ViewManager} index={index}>
          {views.map((view, i) => (
            <View {...view} key={i} />
          ))}
        </Cell>
      </Layout>

      // <div className="App" style={{flexDirection: 'row', justifyContent : 'space-between'}}>
      //   {/* <Lunacall></Lunacall> */}

      //   <FlexView vAlignContent='center' hAlignContent='center'>
      //     <RecommandArt onClick={this.handleExpandClick}/>
      //     <FindArt onClick={this.handleExpandClick}/>
      //   </FlexView>
      // </div>
    );
  }
})

const App = MoonstoneDecorator(Changeable({prop: 'index', change: 'onChange'}, AppBase));

export default App;
