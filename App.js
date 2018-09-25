import React from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Meetings from './src/screens/Meetings';
import Profil from './src/screens/Profil';
import Support from './src/screens/Support';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const BottomTab = createBottomTabNavigator({
  Meetings: Meetings,
  Home: Home,
  Profil: Profil,
  Support: Support
},
  {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
  })

const StackNavigator = createStackNavigator({
  login: Login,
  register: Register,
})

const RootNav = createSwitchNavigator({
  mainTabs: BottomTab,
  auth: StackNavigator,
})

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}