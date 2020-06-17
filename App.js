import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce5578',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24,
    color: 'whitesmoke',
  }
});
