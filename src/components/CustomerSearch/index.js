import React from 'react';
import ListBtns from './listBtns.js';
import TableContainer from './tableContainer.js';
import {isTablet} from 'react-native-device-info';
import {ScrollView, View} from 'react-native';
import {styles} from './style';

export default function () {
  return (
    <View>
      {!isTablet() ? (
        <View style={styles.scrollHorizontalPortrait}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ListBtns />
          </ScrollView>
        </View>
      ) : (
        <View />
      )}
      <View style={styles.searchContainer}>
        <TableContainer />
        {isTablet() ? (
          <View style={styles.rightBtnContainer}>
            <ListBtns />
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}
