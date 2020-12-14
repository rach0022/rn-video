import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [clickCounter, setClickCounter] = React.useState(0)

  const handleClick = (ev) => { setClickCounter((prev) => prev + 1) }
  return (
    <View style={styles.container}>
      <Text>{clickCounter}</Text>
      <TouchableOpacity onPress={handleClick}><Text>Increment</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
