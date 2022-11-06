import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

//Menu bar content space
const topBarHeight = 50;
const contentSpaceHeight = Dimensions.get('window').height - topBarHeight;



const PageLayouts = StyleSheet.create({
	
	baseview: {
		flex: 1,
		flexDirection: 'column',
		
		//content alignment
		alignItems: 'center',
	},
	
	topBar: {
		flexDirection: 'row',
		width: '100%',
		height: topBarHeight,
		backgroundColor: '#33ddff',
	},
	
	contentSpace: {
		flexDirection: 'row',
		width: '100%',
		height: contentSpaceHeight,
		
		//content alignment
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#dddddd',
	},
	
	contentColumn: {
		
		flexDirection: 'column',
		height: '100%',
		width: '90%',
		
		//content alignment
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: '#ffffff',
		
	},
	
	menuBar: {
		
		flexDirection: 'column',
		//width: landscapeMenuBar,
		height: '100%',
		backgroundColor: '#33ddff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		
	},
	
});

export default PageLayouts;
