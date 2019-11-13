import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },

  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World!</Text>
      <Text style={styles.hello}>Hello World!</Text>
      <Text style={styles.hello}>Hello World!</Text>
    </View>
  );
}


