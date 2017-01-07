'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

var styles = StyleSheet.create({
  cellHeaderText: {
    marginTop: 16,
    marginRight: 64,
    fontSize: 32,
    lineHeight: 35,
    textAlign: 'left',
    fontFamily: 'IowanOldStyle-Bold',
    color: '#555'
  },
  cellDescriptionText: {
    marginBottom: 16,
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Iowan Old Style',
    color: '#555'
  },
  container: {
    padding: 20,
    marginTop: 16,
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    paddingLeft: 16,
    marginBottom: 16,
    flex: 4,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#555',
    fontFamily: 'IowanOldStyle-Bold',
    borderRadius: 4,
    color: '#555'
  },
  line: {
    flexGrow: 1,
    height: 0.5,
    backgroundColor: '#e5e5e5'
  },
});

class LandingCell extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        underlayColor="#e5e5e5">
        <View>
          <View style={styles.line} />
          <View style={styles.flowRight}>
            <View>
              <Text style={styles.cellHeaderText}>
                {this.props.headerText}
              </Text>
              <Text style={styles.cellDescriptionText}>
                {this.props.detailText}
              </Text>
            </View>
            <Text>></Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _onPressButton() {

  }
}

class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search for a good drink...'/>
        </View>
        <LandingCell
          headerText="Explore drinks by category"
          detailText="Gin, rum, vodka, whiskey, etc."/>
        <LandingCell
          headerText="Find drinks by ingredient"
          detailText="Tell us what ingredients you have, we'll do the rest"/>
        <LandingCell
          headerText="Browse the glossary"
          detailText="Learn about jiggers, muddlers, splashes, and more."/>
        <View style={styles.line} />
      </View>
    );
  }
}

module.exports = LandingPage;
