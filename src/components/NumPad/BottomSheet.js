import React from 'react';
import {Text, View, Dimensions} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import {ListItem, SearchBar, Icon, normalize} from 'react-native-elements';

const {height} = Dimensions.get('window');

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: normalize(10),
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
  },
  panelHeader: {
    height: 50,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1,
  },
};

class BottomSheet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={{top: height / 5, bottom: 50}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={{color: '#FFF'}}>Bottom Sheet Peek</Text>
            </View>
            <View style={styles.container}>
              <Text>Bottom Sheet Content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

export default BottomSheet;
