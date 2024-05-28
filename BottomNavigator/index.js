import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreen from '../Component /LandingScreen';
import ReviewsScreen from '../Src/Screens/ReviewScreen';
import TrackScreen from '../Src/Screens/TrackScreen';
import ReferScreen from '../Src/Screens/ReferScreen';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={LandingScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Refer"
        component={ReferScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Refer
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Reviews
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Track"
        component={TrackScreen}
        options={{
          tabBarLabel: ({color, focused}) => (
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Track
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
