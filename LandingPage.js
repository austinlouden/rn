'use strict';

import React, { Component, PropTypes} from 'react'
import {
  NavigatorIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

var CategoryPage = require('./CategoryPage');
var globalStyles = require('./styles.js');

const styles = StyleSheet.create({
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
});

class LandingCell extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="#e5e5e5">
        <View>
          <View style={globalStyles.separatorLine} />
          <View style={styles.flowRight}>
            <View>
              <Text style={globalStyles.largeCellHeaderText}>
                {this.props.headerText}
              </Text>
              <Text style={globalStyles.largeCellDescriptionText}>
                {this.props.detailText}
              </Text>
            </View>
            <Text>></Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

class LandingPage extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search for a good drink...'/>
        </View>
        <LandingCell onPress={this._handleCategoryPress}
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

  _handleCategoryPress = () => {
    this.props.navigator.push({
      component: CategoryPage,
    });
  }
}

module.exports = LandingPage;
