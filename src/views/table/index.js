import React, {PureComponent, useEffect} from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Text} from 'components';
import {Typography} from 'components/Text';
import debounce from 'utilities/helpers/debounce';
import _ from 'lodash';
import axios from '../../state/utils/fetch';
import {styles} from './style';
import {colors} from 'config';

export default function () {
  const [selected, setSelected] = React.useState(new Map());
  const [oldId, setOldId] = React.useState(0);
  const [table, updateTables] = React.useState([]);

  async function getTables() {
    const payloadTable = {
      query: `
        {getEntityScreenItems(name:"All Tables")
          {
            name
            caption
            color
            labelColor
          }}
        `,
    };
    const tables = await axios.post('getOrderTagGroups', payloadTable);
    updateTables(tables.data.getEntityScreenItems);
    // console.log('tables', tables.data.getEntityScreenItems);
  }

  const onSelect = React.useCallback(
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
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  useEffect(function effectFunction() {
    getTables();
    onSelect(0);
  }, []);
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
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}>
          <View style={styles.verticalView}>
            {table.map((item, idx) => (
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
