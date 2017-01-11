'use strict';

import {
  StyleSheet
} from 'react-native';

const largeFont = 32;
const smallFont = 14;

const superLightGray = '#e5e5e5';
const darkGray = '#555';

const boldFontFamily = 'IowanOldStyle-Bold';
const regularFontFamily = 'Iowan Old Style';

module.exports = StyleSheet.create({
  separatorLine: {
    flexGrow: 1,
    height: 0.5,
    backgroundColor: superLightGray
  },
  largeCellHeaderText: {
    marginTop: 16,
    marginRight: 64,
    fontSize: largeFont,
    lineHeight: 35,
    textAlign: 'left',
    fontFamily: boldFontFamily,
    color: darkGray
  },
  largeCellDescriptionText: {
    marginBottom: 16,
    fontSize: smallFont,
    textAlign: 'left',
    fontFamily: regularFontFamily,
    color: darkGray
  },
});
