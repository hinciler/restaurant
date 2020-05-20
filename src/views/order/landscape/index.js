import React, {PureComponent} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './style.js';
import LeftButton from './leftButton';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const dummy = require('./data.json');
console.log('dummy', dummy);
export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {leftDummy, orange, green} = dummy;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('assets/img/logo.png')} />
          <View style={styles.header_right}>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis a
              sit, dolor veniam dolores ipsam illum
            </Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.leftBtnWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {leftDummy.map((item, index) => (
                <LeftButton text={item.text} disabled={item.disabled} />
              ))}
            </ScrollView>
          </View>

          <View style={styles.textArea}>
            <View style={styles.textAreaWrapper}>
              <Text>Lorem ipsum dolor sit.</Text>
            </View>
            <View style={styles.textAreaButtons}>
              <Button
                title="Settle"
                containerStyle={{
                  flex: 1,
                  padding: 10,
                  backgroundColor: 'white',
                }}
                buttonStyle={{backgroundColor: 'white'}}
                titleStyle={{color: '#000', fontWeight: 'bold'}}
              />
              <Button
                title="Close"
                containerStyle={{
                  flex: 1,
                  padding: 10,
                  backgroundColor: 'red',
                }}
                buttonStyle={{backgroundColor: 'red'}}
                titleStyle={{color: 'white', fontWeight: 'bold'}}
                onPress={Actions.pop}
              />
            </View>
          </View>

          <View style={styles.rightBtnWrapper}>
            <View style={styles.orange}>
              <ScrollView>
                {orange.map((item, index) => (
                  <Button
                    key={index}
                    title={item}
                    containerStyle={{
                      flex: 1,
                      padding: 10,
                      backgroundColor: 'orange',
                      marginTop: 5,
                    }}
                    buttonStyle={{backgroundColor: 'orange'}}
                    titleStyle={{
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                ))}
              </ScrollView>
            </View>
            <View style={styles.green}>
              <ScrollView contentContainerStyle={{}}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                  }}>
                  {green.map((item, index) => (
                    <Button
                      key={index}
                      title={item}
                      containerStyle={{
                        padding: 10,
                        backgroundColor: 'green',
                        margin: '1%',
                        flexGrow: 1,
                        width: '30%',
                      }}
                      buttonStyle={{backgroundColor: 'green'}}
                      titleStyle={{
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
