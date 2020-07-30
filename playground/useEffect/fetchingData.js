import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import axios from 'axios';
import {ListItem} from 'react-native-elements';

const FetchingData = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then((res) => {
        console.log('res', res.data.results);
        setPosts(res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        {posts &&
          posts.map((l, i) => (
            <ListItem
              key={i}
              title={l.name.first + ' ' + l.name.last}
              subtitle={l.phone}
              leftAvatar={{source: {uri: l.picture.medium}}}
              bottomDivider
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FetchingData;

const styles = StyleSheet.create({});
