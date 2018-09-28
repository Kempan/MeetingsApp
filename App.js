import React from 'react';
import { Login, Home, Register, UserMeetings, MeetingPage, Profil, Support, ReviewMeeting } from './src/screens';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const TopTabs = createMaterialTopTabNavigator({
  Business: Home,
  Politics: Home,
  Sports: Home,
  Tech: Home
}, {
    navigationOptions: {
    }
  })

const MainTabs = createBottomTabNavigator({
  Home: TopTabs,
  Meetings: UserMeetings,
  Profil: Profil,
  Support: Support
}, {
    tabBarOptions: {
      activeTintColor: 'rgb(45,48,71)',
      inactiveTintColor: 'gray',
    },
  })

const AuthStack = createStackNavigator({
  login: Login,
  register: Register,
})

const MainApp = createStackNavigator({
  mainTabs: MainTabs,
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
  auth: AuthStack,
  mainapp: MainApp,
})

export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}