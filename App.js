import React from 'react';
import { AsyncStorage, ActivityIndicator, Image } from 'react-native';
import config from './src/config';
import { Images } from './src/resources/images';
import {
  AuthScreen,
  HomeScreen,
  RegisterScreen,
  UserMeetingScreen,
  MeetingScreen,
  ProfilScreen,
  SupportScreen,
  ReviewMeetingScreen,
  CreateMeeting,
  EntrantScreen
} from './src/screens';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const TopTabs = createMaterialTopTabNavigator({
  Meetings: UserMeetingScreen,
  Create: CreateMeeting,
},
  {
    navigationOptions: {

    }
  });

const MainTabs = createBottomTabNavigator({
  Home: HomeScreen,
  Meetings: TopTabs,
  Profil: ProfilScreen,
  Settings: SupportScreen
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? Images.homeBlack : Images.home
        } else if (routeName === 'Meetings') {
          iconName = focused ? Images.meetingsBlack : Images.meetings;
        } else if (routeName === 'Profil') {
          iconName = focused ? Images.profilBlack : Images.profil;
        } else if (routeName === 'Settings') {
          iconName = focused ? Images.settingsBlack : Images.settings;
        }

        return <Image source={iconName} style={{ height: 25, width: 25 }} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
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
  EntrantScreen: EntrantScreen,
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