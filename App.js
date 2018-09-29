import React from 'react';
import {
  AuthScreen,
  HomeScreen,
  RegisterScreen,
  UserMeetingScreen,
  MeetingScreen,
  ProfilScreen,
  SupportScreen,
  ReviewMeetingScreen
} from './src/screens';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const TopTabs = createMaterialTopTabNavigator({
  Business: HomeScreen,
  Politics: HomeScreen,
  Sports: HomeScreen,
  Tech: HomeScreen
}, {
    navigationOptions: {
    }
  })

const MainTabs = createBottomTabNavigator({
  Home: TopTabs,
  Meetings: UserMeetingScreen,
  Profil: ProfilScreen,
  Support: SupportScreen
}, {
    tabBarOptions: {
      activeTintColor: 'rgb(45,48,71)',
      inactiveTintColor: 'gray',
    },
  })

const AuthStack = createStackNavigator({
  Login: AuthScreen,
  Register: RegisterScreen,
})

const MainApp = createStackNavigator({
  MainTabs: MainTabs,
  MeetingScreen: MeetingScreen,
  ReviewMeetingScreen: ReviewMeetingScreen
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(66, 134, 244)'
      }
    }
  })

const RootNav = createSwitchNavigator({
  Auth: AuthStack,
  MainApp: MainApp,
})



export default class App extends React.Component {
  render() {
    return (
      <RootNav />
    );
  }
}