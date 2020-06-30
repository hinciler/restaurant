import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

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
  const {domain, port} = useSelector((state) => state.settings);
  const [domain_text, onChangeDomain] = useState(
    domain || 'androiddemo.sambapos.com',
  );
  const [port_text, onChangePort] = useState(port || '9000');

  useImperativeHandle(ref, () => ({
    getDomain() {
      return {
        port: port_text,
        domain: domain_text,
      };
    },
  }));
  return (
    <View style={styles.ipWrapper}>
      <View style={styles.domainWrapper}>
        <TextInput
          style={styles.domain_input}
          onChangeText={(text) => onChangeDomain(text)}
          value={domain_text}
        />
        <Divider backgroundColor={colors.text} />
      </View>
      <View style={styles.portWrapper}>
        <TextInput
          style={styles.port_input}
          onChangeText={(text) => onChangePort(text)}
          value={port_text}
        />
        <Divider backgroundColor={colors.text} />
      </View>
    </View>
  );
});

export default IPComponent;
