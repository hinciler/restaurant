import React, {useEffect, useCallback} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Text} from 'components';
import {Typography} from 'components/Text';
import debounce from 'utilities/helpers/debounce';
import _ from 'lodash';
import {table} from '@table/actions';
import {styles} from './style';
import {colors} from 'config';
import {Actions} from 'react-native-router-flux';
import {Button} from 'react-native-elements';
import RightButton from './rightButton';
const dummy = require('./dummy.json');
const {rightDummy, containerItems} = dummy;

export default function () {
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [tableState, updateTables] = React.useState([]);
  const [value, onChangeText] = React.useState('');
  const lang = useSelector((state) => state.translate.lang);
  const tableData = useSelector((state) => state.table.data);
  const dispatch = useDispatch();

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      setOldId(id);
      if (selected.get(id) !== true) {
        newSelected.set(id, !selected.get(id));
      }
      if (id !== oldId) {
        newSelected.delete(oldId, !selected.get(oldId));
      }
      setSelected(newSelected);
      // setNewId(id);
      // console.log('id', newId);
      // console.log('selected_id', oldId);
    },
    [oldId, selected],
  );

  function getTables() {
    dispatch(table());
  }

  useEffect(function effectFunction() {
    getTables();
    onSelect(0);
  }, []);

  useEffect(
    function getTable() {
      if (
        typeof tableData.getEntityScreenItems !== 'undefined' &&
        tableData.getEntityScreenItems.length > 0
      ) {
        updateTables(tableData.getEntityScreenItems);
      }
    },
    [tableData],
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.scrollHorizontal}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={debounce(() => onSelect(-1))}
            key={-1}
            style={[
              styles.horizontalButton,
              {
                backgroundColor: selected.get(-1) ? colors.grey0 : colors.white,
              },
            ]}>
            <Text
              text={lang.customerSearch}
              textAlign="center"
              type={Typography.PS}
            />
          </TouchableOpacity>
          {_.range(1, 12).map((item, index) => (
            <TouchableOpacity
              onPress={debounce(() => onSelect(index))}
              key={index}
              style={[
                styles.horizontalButton,
                {
                  backgroundColor: selected.get(index)
                    ? colors.grey0
                    : colors.white,
                },
              ]}>
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
          <View>
            {oldId === -1 ? (
              <View style={styles.searchContainer}>
                <View style={styles.searchLeftContainer}>
                  <View style={styles.searchInputContainer}>
                    <Text style={styles.searchTextStyle} text={lang.search} />
                    <TextInput
                      style={styles.searchTextInputStyle}
                      placeholder={lang.pleaseSearch}
                      onChangeText={(text) => onChangeText(text)}
                      value={value}
                    />
                    <Button
                      title={'x'}
                      style={{flex: 0.05}}
                      buttonStyle={styles.searchBtnStyle}
                      titleStyle={styles.searchBtnTextStyle}
                    />
                  </View>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.tableContainerStyle}>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        {containerItems.map((item, idx) => (
                          <View style={styles.tableHeaderStyle}>
                            <Text
                              text={item}
                              type={Typography.PSB}
                              numberOfLines={1}
                            />
                          </View>
                        ))}
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View style={{flex: 0.15}}>
                  <FlatList
                    contentContainerStyle={{flex: 1}}
                    style={styles.container}
                    data={rightDummy}
                    renderItem={({item, index}) => (
                      <RightButton
                        containerStyle={styles.leftButtons}
                        item={item}
                        text={item.text}
                        disabled={item.disabled}
                      />
                    )}
                    keyExtractor={(item) => item.pay}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.verticalView}>
                {tableState.map((item, idx) => (
                  <TouchableOpacity
                    onPress={debounce(() => Actions.orderList())}
                    key={idx}
                    style={styles.verticalButton}>
                    <Text
                      text={item.name}
                      textAlign="center"
                      type={Typography.PS}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
