import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './BottomNavigator';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
