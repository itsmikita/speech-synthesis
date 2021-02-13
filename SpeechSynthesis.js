import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import * as Speech from "expo-speech";

export default () => {
  const input = useRef( null );
  const [ text, setText ] = useState( "Пизда!" );
  const speak = () => {
    Speech.speak( text );
  };
  return (
    <View style={ styles.view }>
      <StatusBar style="auto" />
      <TextInput style={ styles.input } multiline="true" value={ text } onChange={ text => setText( text ) } />
      <Button title="Speak to me!" onPress={ speak } />
    </View>
  );
};

const styles = StyleSheet.create( {
  view: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  input: {
    marginBottom: 16,
    borderColor: "gray",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 8,
    height: 88
  }
} );