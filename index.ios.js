/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var LandingPage = require('./LandingPage');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
  }
}

class Craft extends React.Component {
  render() {
    return <ReactNative.NavigatorIOS style={styles.container}
    initialRoute={{
      title: 'Craft',
      component: HelloWorld,
    }}/>

  }
}

ReactNative.AppRegistry.registerComponent('drinks', function() { return LandingPage });
