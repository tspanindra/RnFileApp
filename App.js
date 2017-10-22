/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
const RNFS = require('react-native-fs');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    RNFS.readFile('./textfile.txt', 'utf8').then(() => {
      console.warn('Succesfull');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Add words to Search</Text>
        <TextInput
          style={styles.textInput}
          editable={true}
          maxLength={40}
          placeholder={'Enter search text'}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF'
  },
  text: {
    paddingTop: 20,
    fontWeight: 'bold'
  },
  textInput: {
    height: 40,
    marginTop: 30,
    borderColor: 'gray',
    borderWidth: 1
  }
});
