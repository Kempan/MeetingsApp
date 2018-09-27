import React from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Meetings from './src/screens/Meetings';
import MeetingPage from './src/screens/MeetingPage';
import Profil from './src/screens/Profil';
import Support from './src/screens/Support';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const MainTabs = createBottomTabNavigator({
  Home: Home,
  Meetings: Meetings,
  Profil: Profil,
  Support: Support
},
  {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
  })

const AuthStack = createStackNavigator({
  login: Login,
  register: Register,
})

const MeetingStack = createStackNavigator({
  mainTabs: MainTabs,
  meetingPage: MeetingPage
})

const RootNav = createSwitchNavigator({
  // mainTabs: MainTabs,
  meeting: MeetingStack,
  auth: AuthStack,
})

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}