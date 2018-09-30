import React from 'react';
import { AsyncStorage } from 'react-native';
import config from './src/config';
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

  constructor(props) {
    super(props);

    this.state = {
      authCheck: false,
      authed: false
    }
  }

  componentDidMount() {
    console.log(config.userIdKey);
    return AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        if (key) {
          this.setState({
            authCheck: true,
            authed: true
          });
        } else {
          this.setState({
            authCheck: true
          });
        }
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {

    return (
      <RootNav />
    );
  }
}