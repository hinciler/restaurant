import React, {PureComponent} from 'react';
import {View, Text, SafeAreaView, Animated} from 'react-native';
import {ListItem, SearchBar, Icon, withBadge} from 'react-native-elements';
export default class gestureExample extends PureComponent {
  state = {
    search: '',
    scrollY: new Animated.Value(0),
    data: [],
  };
  x = new Animated.Value(0);

  updateSearch = (search) => {
    this.setState({search});
  };
  async componentDidMount() {
    const data = await fetch('https://randomuser.me/api/?results=100')
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        return json.results;
      })
      .catch((error) => {
        console.error(error);
      });
    this.x.addListener(({value}) => this.moveCursor(value));
    this.moveCursor(0);
  }
  moveCursor(value2) {
    console.log('value2', this.x);
  }
  render() {
    const {search, data} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Animated.ScrollView
            contentContainerStyle={styles.scroll}
            scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: this.x}}}],
              {useNativeDriver: true}, // <-- Add this
            )}>
            <View>
              <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
              />
              {data.length > 0 &&
                data.map((l, idx) => (
                  <ListItem
                    key={idx}
                    leftAvatar={{source: {uri: l.picture.thumbnail}}}
                    title={l.name.first + ' ' + l.name.last}
                    subtitle={l.email}
                    bottomDivider
                  />
                ))}
            </View>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export const styles = {
  container: {
    padding: 10,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: '#ec6685',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#ec6685',
  },
  text: {
    color: '#fff',
  },
  scroll: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 20,
  },
  badgeWrapper: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
  },
  badgeDefault: {
    fontSize: 18,
    color: '#fff',
    padding: 15,
  },
  defaultBadgeWrapper: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  active_BadgeWrapper: {
    backgroundColor: '#02abb0',
    margin: 5,
    padding: 15,
    borderColor: 'white',
    borderWidth: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  active_btn_txt: {
    color: '#fff',
    padding: 5,
    fontSize: 14,
  },
  passive_btn_txt: {
    color: '#000',
    padding: 5,

    fontSize: 14,
  },
  btn_wrapper: {
    alignItems: 'center',
  },
  sliderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderr_text: {
    paddingLeft: 5,
    color: '#ec6685',
    fontWeight: 'bold',
  },
};
