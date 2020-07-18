import React, {useEffect, useCallback, useRef} from 'react';
import {ScrollView, View, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, CustomerSearch, Button} from 'components';
import debounce from 'utilities/helpers/debounce';
import _ from 'lodash';
import {table} from '@table/actions';
import {styles} from './style';
import {colors} from 'config';
import {Actions} from 'react-native-router-flux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {normalize, SearchBar} from 'react-native-elements';
import {SearchItems} from 'helpers/searchItems';

export default function () {
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [value, updateSearch] = React.useState('');
  const [opacity, setOpacity] = React.useState(0);
  const [tableState, updateTables] = React.useState([]);
  const lang = useSelector((state) => state.translate.lang);
  const tableData = useSelector((state) => state.table.data);
  const dispatch = useDispatch();
  const scrollViewRef = useRef();

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
  const onChangeSearchText = async (search) => {
    updateSearch(search);

    const searchData = await SearchItems(
      tableData.getEntityScreenItems,
      20,
      search,
      'caption',
    );
    updateSearch(search);
    updateTables(searchData);
  };
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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContainer}>
          <Button
            onPress={debounce(() => Actions.customerSearch({showHeader: true}))}
            style={[
              styles.horizontalButton,
              {
                backgroundColor: selected.get(-1)
                  ? colors.selected
                  : colors.white,
              },
            ]}
            text={lang.customerSearch}
            backgroundColor={'white'}
            fontFamily={'Roboto-Regular'}
            fontSize={normalize(12)}
          />

          {_.range(1, 12).map((item, index) => (
            <Button
              onPress={debounce(() => onSelect(index))}
              style={[
                styles.horizontalButton,
                {
                  backgroundColor: selected.get(index)
                    ? colors.selected
                    : colors.white,
                },
              ]}
              text={'All Tables ' + item}
              backgroundColor={'white'}
              fontFamily={'Roboto-Regular'}
              fontSize={normalize(12)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.scrollContainer}>
        <View>
          <KeyboardAwareScrollView
            behavior="padding"
            extraScrollHeight={50}
            onContentSizeChange={(contentWidth, contentHeight) => {
              if (contentHeight > 200 && opacity === 0) {
                scrollViewRef.current.scrollToPosition(75, 75, true);

                setTimeout(() => {
                  setOpacity(1);
                }, 300);
              }
            }}
            ref={scrollViewRef}>
            <SearchBar
              platform="ios"
              containerStyle={[styles.searchTextInputStyle, {opacity: opacity}]}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              clearIcon={{
                type: 'materialIcons',
                name: 'clear',
              }}
              placeholderTextColor="#8E8E92"
              autoCapitalize="none"
              placeholder={lang.pleaseSearch}
              onChangeText={(text) => onChangeSearchText(text)}
              value={value}
            />
            <View style={styles.verticalView}>
              {tableState.map((item, idx) => (
                <View>
                  <Button
                    onPress={debounce(() => Actions.orderList())}
                    style={styles.verticalButton}
                    text={item.name}
                    backgroundColor={'white'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={normalize(12)}
                  />
                </View>
              ))}
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
}
