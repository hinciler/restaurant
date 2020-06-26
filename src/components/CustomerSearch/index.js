import React from 'react';
import ListBtns from './listBtns.js';
import TableContainer from './tableContainer.js';
import {isTablet} from 'react-native-device-info';
import {ScrollView, View} from 'react-native';
import {styles} from './style';
import {Header} from 'components';
import {Actions} from 'react-native-router-flux';

export default function () {
  return (
    <View style={styles.container}>
      <Header rightIconName="close" onRightPress={Actions.pop} />
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
