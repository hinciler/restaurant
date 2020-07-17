import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  ScrollView,
  FlatList,
} from 'react-native';
import {ListItem, SearchBar, Icon, withBadge} from 'react-native-elements';

export default function GestureHooks() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [showSearcBar, setShowSearcBar] = useState(false);
  const refContainer = useRef();
  const ScrollY = new Animated.Value(0);
  const moveCursor = (value2) => {
    console.log('value2', value2);
  };
  useEffect(() => {
    ScrollY.addListener(({value}) => moveCursor(value));

    fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        setData(json.results);
        // setTimeout(
        //   () => refContainer.current.scrollTo({x: 0, y: 70, animated: true}),

        //   1000,
        // );
        //  refContainer.scrollTo(250);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const Item = ({item}) => (
    <View
      style={{
        padding: 10,
        backgroundColor: 'green',
        height: 70,
        width: '30%',
        justifyContent: 'center',
      }}>
      <Text numberOfLines={2}>{item.email}</Text>
    </View>
  );
  const handleScroll = function (event) {
    if (event.nativeEvent.contentOffset.y < 0) {
      setShowSearcBar(true);
    }
    console.log(event.nativeEvent.contentOffset.y);
  };
  return (
    <SafeAreaView
      style={{flexDirection: 'row', flex: 1, backgroundColor: 'red'}}>
      <View style={{flexDirection: 'row', flex: 1, backgroundColor: 'red'}}>
        {/*     <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={(item, index) => index}
          initialScrollIndex={1}
          getItemLayout={(data, index) => ({
            length: data.length,
            offset: 70 * index,
            index,
          })}
          numColumns={3}
          columnWrapperStyle={{
            padding: 5,
            justifyContent: 'space-around',
          }}
          ListHeaderComponent={
            data.length > 10 ? (
              <SearchBar
                placeholder="Type Here..."
                onChangeText={setSearch}
                containerStyle={{height: 70}}
                value={search}
              />
            ) : null
          }
        />*/}
        <ScrollView ref={refContainer} onScroll={handleScroll} bounces={false}>
          <View>
            {showSearcBar && (
              <Animated.View>
                <SearchBar
                  placeholder="Type Here..."
                  onChangeText={setSearch}
                  containerStyle={{height: 70}}
                  value={search}
                />
              </Animated.View>
            )}

            {data.length > 0 &&
              data.map((l, idx) => (
                <ListItem
                  key={idx}
                  leftAvatar={{source: {uri: l.picture.thumbnail}}}
                  title={l.name.first + ' ' + l.name.last}
                  subtitle={l.email}
                  bottomDivider
                  onPress={() => setShowSearcBar(false)}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
