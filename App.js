import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Instabug from 'instabug-reactnative';

const INSTABUG_TOKEN = 'dddb853a1659eb00d574035bcd7d96d2';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Instabug.startWithToken(INSTABUG_TOKEN, [Instabug.invocationEvent.shake]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
