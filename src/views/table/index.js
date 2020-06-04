import React, {useEffect, useCallback} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Text} from 'components';
import {Typography} from 'components/Text';
import debounce from 'utilities/helpers/debounce';
import _ from 'lodash';
import {table} from '@table/actions';
import {styles} from './style';
import {colors} from 'config';

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
          <View style={styles.verticalView}>
            {tableState.map((item, idx) => (
              <TouchableOpacity
                onPress={debounce(getTables)}
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
        </ScrollView>
      </View>
    </View>
  );
}
