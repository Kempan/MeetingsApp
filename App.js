import React from 'react';
// import Login from './src/screens/Login';
// import Home from './src/screens/Home';
// import Register from './src/screens/Register';
// import Meetings from './src/screens/Meetings';
// import MeetingPage from './src/screens/MeetingPage';
// import Profil from './src/screens/Profil';
// import Support from './src/screens/Support';
// import ReviewMeeting from './src/screens/ReviewMeeting';
import { Login, Home, Register, Meetings, MeetingPage, Profil, Support, ReviewMeeting } from './src/screens';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const MainTabs = createBottomTabNavigator({
  Home: Home,
  Meetings: Meetings,
  Profil: Profil,
  Support: Support
}, {
    tabBarOptions: {
      activeTintColor: 'rgb(45,48,71)',
      inactiveTintColor: 'gray',
    },
  })

const TopTabs = createMaterialTopTabNavigator({
  Business: MainTabs,
  Politics: MainTabs,
  Sports: MainTabs,
  Tech: MainTabs
}, {
    navigationOptions: {
    }
  })

const AuthStack = createStackNavigator({
  login: Login,
  register: Register,
})

const MainApp = createStackNavigator({
  mainTabs: TopTabs,
  meetingPage: MeetingPage,
  reviewMeeting: ReviewMeeting
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(66, 134, 244)'
      }
    }
  })

const RootNav = createSwitchNavigator({
  // mainTabs: MainTabs,
  mainapp: MainApp,
  auth: AuthStack,
})

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}