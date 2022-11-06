import React from 'react';
import { StyleSheet } from 'react-native';

//white
const primary = '#ffffff';
//light blue
const secondary = '#55a8ff';
//dark blue
const tertiary = '#020072';
//brown
const secondPrimary = '#402a00';
//black
const secondSecondary = '#000000';

const StandardStyles = StyleSheet.create({
	
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	//*/
	BlueBox: {
		flexDirection: 'row',
		width: 200,
		height: 200,
		backgroundColor: '#00ffff'
	},
	YellowBox: {
		flexDirection: 'row',
		width: 200,
		height: 200,
		backgroundColor: '#ffff00',
	},
	GreenBox: {
		flexDirection: 'row',
		width: '50%',
		height: '100%',
		backgroundColor: '#00ff00',
	},
	
});

export default StandardStyles;