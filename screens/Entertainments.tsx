import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';


export default function Entertainments() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Search</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
