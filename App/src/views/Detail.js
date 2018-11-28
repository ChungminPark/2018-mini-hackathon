import {Header, Panel} from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'

import image_re_1 from '../App/assets/renoir,FR/Renoir75_Woman at the Piano.jpg'
import image_re_2 from '../App/assets/renoir,FR/Renoir76_Alfred Sisley.jpg'
import image_re_3 from '../App/assets/renoir,FR/Renoir79A_Young Woman Sewing.jpg'
import image_re_4 from '../App/assets/renoir,FR/Renoir79B_Acrobats at the Cirque Fernando.jpg'
import image_re_5 from '../App/assets/renoir,FR/Renoir81_Two Sisters.jpg'
import image_re_6 from '../App/assets/renoir,FR/Renoir90_Jean Renoir Sewing.jpg'

import image_ma_1 from '../App/assets/manet,FR/Manet62_Boy with Pitcher.jpg'
import image_ma_2 from '../App/assets/manet,FR/Manet65_Jesus Mocked by the Soldiers.jpg'
import image_ma_3 from '../App/assets/manet,FR/Manet74_Portrait of Berthe Morisot with a Fan.jpg'
import image_ma_4 from '../App/assets/manet,FR/Manet78_Portrait of a Woman with a Black Fichu.jpg'
import image_ma_5 from '../App/assets/manet,FR/Manet78_Portrait of Alphonse Maureau.jpg'
import image_ma_6 from '../App/assets/manet,FR/Manet79_Woman Reading.jpg'

import image_mo_1 from '../App/assets/monet,FR/1867 Monet_The Beach at Sainte_Adresse.jpg'
import image_mo_2 from '../App/assets/monet,FR/1890 Monet_Poppy Field.jpg'
import image_mo_3 from '../App/assets/monet,FR/1890 Monet_Stacks of Wheat.jpg'
import image_mo_4 from '../App/assets/monet,FR/1900 Monet_Waterloo Bridge.jpg'
import image_mo_5 from '../App/assets/monet,FR/1900 Monet_Waterloo Bridge.jpg'
import image_mo_6 from '../App/assets/monet,FR/1901 Monet_Charing Cross Bridge.jpg'

import image_ch_1 from '../App/assets/chagall/Chagall23_The Praying Jew.jpg'
import image_ch_2 from '../App/assets/chagall/Chagall27_The Circus Rider.jpg'
import image_ch_3 from '../App/assets/chagall/Chagall30_The Angel and the Reader.jpg'
import image_ch_4 from '../App/assets/chagall/Chagall48_Plate Three, from The Arabian Nights.jpg'
import image_ch_5 from '../App/assets/chagall/Chagall49_Saint Jean Cap Ferrat.jpg'
import image_ch_6 from '../App/assets/chagall/Chagall74_The Four Seasons.jpg'

import image_pi_1 from '../App/assets/picasso,SP/Picasso04_Woman with a Helmet of Hair.jpg'
import image_pi_2 from '../App/assets/picasso,SP/Picasso06_Nude with a Pitcher.jpg'
import image_pi_3 from '../App/assets/picasso,SP/Picasso09_Head of a Woman.jpg'
import image_pi_4 from '../App/assets/picasso,SP/Picasso27_Head.jpg'
import image_pi_5 from '../App/assets/picasso,SP/Picasso31_The Red Armchair.jpg'
import image_pi_6 from '../App/assets/picasso,SP/Picasso54_Portrait of Sylvette David.jpg'

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
						{/* <div>Gender: {genders[this.props.gender]}</div>
						<div>Color: {this.props.color}</div>	
						<div>Weight: {this.props.weight}oz</div> */}
						<BackgroundSlideshow images={[image_re_1, image_re_2, image_re_3, image_re_4, image_re_5, image_re_6]} animationDelay={2000}/> 
					</div>
				) : (
					<BackgroundSlideshow images={[image_re_1, image_re_2, image_re_3, image_re_4, image_re_5, image_re_6, 
						image_ma_1, image_ma_2, image_ma_3, image_ma_4, image_ma_5, image_ma_6, 
						image_mo_1, image_mo_2, image_mo_3, image_mo_4, image_mo_5, image_mo_6,
						image_ch_1, image_ch_2, image_ch_3, image_ch_4, image_ch_5, image_ch_6,
						image_pi_1, image_pi_2, image_pi_3, image_pi_4, image_pi_5, image_pi_6
					]} animationDelay={5000}/>
				)}
			</Panel>
		);
	}
}

export default DetailBase;
export {DetailBase as Detail, DetailBase};
