import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet, FlatList} from 'react-native';
import {Button, normalize} from 'react-native-elements';
import {colors} from 'config';
import debounce from '../../utilities/helpers/debounce';
import {ListItem, SearchBar, Icon, withBadge} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Animated, {Value, useCode, set, cond} from 'react-native-reanimated';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
import {SearchItems} from 'helpers/searchItems';

export default function ({green_btn, onPress}) {
  const getProduct = (itemName) => {
    onPress(itemName);
  };
  const lang = useSelector((state) => state.translate.lang);
  const [value, onChangeText] = useState('');
  const [productList, setProduct] = useState(green_btn);
  const [opacity, setOpacity] = useState(0);
  const updateSearch = async (search) => {
    if (green_btn) {
      const searchData = await SearchItems(green_btn, green_btn.length, search);
      onChangeText(search);
      setProduct(searchData);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, []);

  const Item = ({item}) => (
    <Button
      onPress={debounce(() => getProduct(item))}
      title={item}
      containerStyle={styles.containerStyle}
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
    />
  );
  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={productList}
        bounces={false}
        renderItem={Item}
        contentContainerStyle={{opacity: opacity}}
        keyExtractor={(item, index) => index}
        initialScrollIndex={1}
        getItemLayout={(data, index) => ({
          length: data.length,
          offset: 70 * index,
          index,
        })}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          green_btn.length > 10 ? (
            <SearchBar
              platform="ios"
              containerStyle={styles.searchTextInputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              clearIcon={{
                type: 'materialIcons',
                name: 'clear',
              }}
              placeholderTextColor="#8E8E92"
              autoCapitalize="none"
              placeholder={lang.pleaseSearch}
              onChangeText={(text) => updateSearch(text)}
              value={value}
            />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: colors.background1,
  },

  green: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 16,
    fontFamily: 'Avenir',
  },
  containerStyle: {
    padding: normalize(10),
    backgroundColor: 'green',
    margin: '1%',
    flexGrow: 1,
    width: '30%',
    height: normalize(55),
    justifyContent: 'center',
  },

  buttonStyle: {backgroundColor: 'green', padding: 0},

  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    fontSize: normalize(12),
  },
  inputContainerStyle: {
    backgroundColor: '#F2F3F5',
  },
  columnWrapperStyle: {
    padding: 5,
    justifyContent: 'space-around',
  },
});
