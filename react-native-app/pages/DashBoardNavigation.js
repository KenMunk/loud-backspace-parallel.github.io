import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashBoardScreen from './DashBoardScreen';
//import ContentBaseColumn from '../components/V2_UI_Components/ContentBaseColumn';


const Stack = createNativeStackNavigator();

function DashBoardNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
    </Stack.Navigator>
  );
}

export default DashBoardNavigation;