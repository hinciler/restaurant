import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Divider, normalize} from 'react-native-elements';
import {colors} from 'config';
const styles = StyleSheet.create({
  ipWrapper: {
    justifyContent: 'space-between',
    paddingBottom: normalize(10),
    flexDirection: 'row',
    height: normalize(40),
  },
  domain_input: {
    height: 40,
    fontSize: normalize(14),
    textAlign: 'center',
  },
  portWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: normalize(3),
  },
  port_input: {
    height: 40,
    fontSize: normalize(14),
    textAlign: 'center',
  },
  domainWrapper: {
    flex: 3,
    justifyContent: 'space-around',
    marginHorizontal: normalize(3),
  },
});
const IPComponent = forwardRef((props, ref) => {
  const [domain, onChangeDomain] = useState('androiddemo.sambapos.com');
  const [port, onChangePort] = useState('9000');

  useImperativeHandle(ref, () => ({
    getDomain() {
      return {
        port,
        domain,
      };
    },
  }));
  return (
    <View style={styles.ipWrapper}>
      <View style={styles.domainWrapper}>
        <TextInput
          style={styles.domain_input}
          onChangeText={(text) => onChangeDomain(text)}
          value={domain}
        />
        <Divider backgroundColor={colors.text} />
      </View>
      <View style={styles.portWrapper}>
        <TextInput
          style={styles.port_input}
          onChangeText={(text) => onChangePort(text)}
          value={port}
        />
        <Divider backgroundColor={colors.text} />
      </View>
    </View>
  );
});

export default IPComponent;
