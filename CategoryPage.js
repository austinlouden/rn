'use strict';

import React, { Component } from 'react'
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import categoryData from './data/categoryData'

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
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(categoryData) => <CategoryCell {...categoryData}/>}
      />
    );
  }
}

const cellStyles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const CategoryCell = (props) => (
  <View style={cellStyles.container}>
    <Text style={styles.text}>
      {`${props.category} ${props.description}`}
    </Text>
  </View>
);

module.exports = CategoryPage;
