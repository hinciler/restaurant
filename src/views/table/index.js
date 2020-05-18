import React, {PureComponent} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import {Button, Header, Text} from 'components';
import {Typography} from 'components/Text';
import debounce from 'utils/helpers/debounce';
import _ from 'lodash';
import {styles} from './style';

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    function changeBackground(index) {
      console.log('Here is the touched cat: ', index);

      // if (!active) {
      //   setActive(true);
      // }
      // setIndex(idx === index);
      // setColor(color === '#000');
    }
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {_.range(1, 12).map((item, index) => (
              <TouchableOpacity
                onPress={debounce(() => changeBackground(index))}
                key={index}
                style={[styles.horizontalButton, {backgroundColor: color}]}>
                <Text
                  text={'All Tables ' + item}
                  textAlign="center"
                  type={Typography.PS}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}>
            <View style={styles.verticalView}>
              {_.range(1, 44).map((item) => (
                <TouchableOpacity
                  onPress={debounce(() => Alert.alert('merhaba'))}
                  key={item}
                  style={styles.verticalButton}>
                  <Text
                    text={'B' + item}
                    textAlign="center"
                    type={Typography.PS}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Table;
