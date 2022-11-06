import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StandardStyles from './StandardStyles.js';

function RoundedBox(content){
	
	return(
	
		<View style={StandardStyles.container}>
			<View>{content.content}!</View>
		</View>
	);
	
}

export default RoundedBox;
