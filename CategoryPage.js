'use strict';

import React, { Component } from 'react'
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import categoryData from './data/categoryData'

var globalStyles = require('./styles.js');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(categoryData),
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight
        onPress={this._handleBackPress}
        underlayColor="#e5e5e5">
          <Text>x</Text>
        </TouchableHighlight>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(categoryData) => <CategoryCell {...categoryData}/>}
        />
      </View>
    );
  }

  _handleBackPress = () => {
    this.props.navigator.pop();
  }
}

const cellStyles = StyleSheet.create({
  container: {
    flex: 1
  },

});

const CategoryCell = (props) => (
  <View style={cellStyles.container}>
    <Text style={globalStyles.largeCellHeaderText}>
      {`${props.category}`}
    </Text>
    <Text style={globalStyles.largeCellDescriptionText}>
      {`${props.description}`}
    </Text>
  </View>
);

module.exports = CategoryPage;
