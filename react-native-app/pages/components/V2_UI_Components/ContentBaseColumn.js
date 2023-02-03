import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';

export default function ContentBaseColumn(props, sideSpaceWidth, backgroundStyle){
	const {height, width} = useWindowDimensions();
	
	return{
		<View style={[{backgroundStyle},{
			flexDirection: 'Row',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden',
			height: '100%',
			width: '100%'
		}]}>
			<View style={{
				flexDirection: 'Column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				overflow: 'hidden',
				height: '100%',
				//A content width of 100% will fill the parent container to 100%
				//But we might want padding on the sides...
				width: width-2*sideSpaceWidth
			}}>
				{props.children}
			</View>
		</View>
	};
}