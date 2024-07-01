import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function TextInputFormComponent({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '75%',
    height: 50,
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});