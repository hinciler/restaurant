import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

class Users extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const payload = {
      query: `
      {
        getUsers {
          name
          userRole {
            name
            isAdmin
          }
        }
      }
        `,
    };
    this.props.getUsers(payload);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Users</Text>
      </View>
    );
  }
}

export default Users;
