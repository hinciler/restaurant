import React from 'react';
import ListBtns from './listBtns.js';
import TableContainer from './tableContainer.js';
import {isTablet} from 'react-native-device-info';
import {ScrollView, View} from 'react-native';
import {styles} from './style';
import {Header} from 'components';
import {Actions} from 'react-native-router-flux';

export default function ({showHeader = false}) {
  return (
    <View style={styles.container}>
      {showHeader && (
        <Header rightIconName="close" onRightPress={Actions.pop} />
      )}
      {!isTablet() && (
        <View style={styles.scrollHorizontalPortrait}>
          <ListBtns />
        </View>
      )}
      <View style={styles.searchContainer}>
        <TableContainer />
        {isTablet() && (
          <View style={styles.rightBtnContainer}>
            <ListBtns />
          </View>
        )}
      </View>
    </View>
  );
}
