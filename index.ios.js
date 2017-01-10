'use strict';

import React, { Component } from 'react'
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

var LandingPage = require('./LandingPage');

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        navigationBarHidden={true}
        initialRoute={{
          title: '',
          component: LandingPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('drinks', function() { return App });
