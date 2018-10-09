import React from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import config from './src/config';
import {
  AuthScreen,
  HomeScreen,
  RegisterScreen,
  UserMeetingScreen,
  MeetingScreen,
  ProfilScreen,
  SupportScreen,
  ReviewMeetingScreen,
  Home
} from './src/screens';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const TopTabs = createMaterialTopTabNavigator({
  Business: Home,
  Politics: UserMeetingScreen,
},
  {
    navigationOptions: {

    }
  });

const MainTabs = createBottomTabNavigator({
  Home: HomeScreen,
  Meetings: TopTabs,
  Profil: ProfilScreen,
  Support: SupportScreen
},
  {
    tabBarOptions: {
      activeTintColor: 'rgb(45,48,71)',
      inactiveTintColor: 'gray',
    },
  });

const AuthStack = createStackNavigator({
  AuthScreen: AuthScreen,
  RegisterScreen: RegisterScreen,
});

const MainApp = createStackNavigator({
  MainTabs: MainTabs,
  MeetingScreen: MeetingScreen,
  ReviewMeetingScreen: ReviewMeetingScreen,
},
  {
    navigationOptions: {
      title: 'iBusinez',
      headerTitleStyle: {
        flex: 1,
        color: 'white',
        textAlign: 'center'
      },
      headerStyle: {
        backgroundColor: 'rgb(66, 134, 244)',
      }
    }
  });

const RootNav = (authBool) => {
  return createSwitchNavigator({
    Auth: AuthStack,
    MainApp: MainApp,
  },
    {
      initialRouteName: (authBool) ? 'MainApp' : 'Auth'
    })
}



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authCheck: false,
      authed: false
    }
  }

  componentDidMount() {
    //AUTO INLOGG
    return AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        if (key) {
          console.log(key)
          this.setState({
            authCheck: true,
            authed: true
          });
        }
        else {
          this.setState({
            authCheck: true,
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          authCheck: true,
        });
      })
  }

  render() {
    const Switch = RootNav(this.state.authed);
    return this.state.authCheck ? <Switch /> : <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }} size='large' />;
  }
}