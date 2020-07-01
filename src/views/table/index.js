import React, {useEffect, useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, CustomerSearch, Button} from 'components';
import debounce from 'utilities/helpers/debounce';
import _ from 'lodash';
import {table} from '@table/actions';
import {styles} from './style';
import {colors} from 'config';
import {Actions} from 'react-native-router-flux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {normalize} from 'react-native-elements';

export default function () {
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [tableState, updateTables] = React.useState([]);
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
      <KeyboardAwareScrollView behavior="padding" extraScrollHeight={50}>
        <View style={styles.scrollHorizontal}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Button
              onPress={debounce(() => onSelect(-1))}
              style={[
                styles.horizontalButton,
                {
                  backgroundColor: selected.get(-1)
                    ? colors.grey0
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
                      ? colors.grey0
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
            {oldId === -1 ? (
              <CustomerSearch />
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}>
                <View style={styles.verticalView}>
                  {tableState.map((item, idx) => (
                    <Button
                      onPress={debounce(() => Actions.orderList())}
                      style={styles.verticalButton}
                      text={item.name}
                      backgroundColor={'white'}
                      fontFamily={'Roboto-Regular'}
                      fontSize={normalize(12)}
                    />
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
