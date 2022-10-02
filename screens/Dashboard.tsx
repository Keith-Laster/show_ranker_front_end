import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from '../components/Icon';
import ScreenContainer from '../components/ScreenContainer';
import Table from '../components/Table';
import Title from '../components/Text/Title';
import colors from '../constants/Colors';


import { RootTabScreenProps } from '../types';

export interface Entertainment {
  title: string;
  description: string;
  entertainmentTypeId: number;
  genreId: number;
}

const entertainments: Entertainment[] = [
  {
    title: "Spongebob",
    description: "I am squidward... my children are spongebob and patrick.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Lord of the Rings",
    description: "9 friends set off on a grand adventure to return jewlry.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "DieHard",
    description: "Best Christmas movie of all time.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Harry Potter",
    description: "Boy get's touched when he is young and now keeps his assailants seed inside of him.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Superman",
    description: "Worse than aquaman",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Spongebob",
    description: "I am squidward... my children are spongebob and patrick.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Lord of the Rings",
    description: "9 friends set off on a grand adventure to return jewlry.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "DieHard",
    description: "Best Christmas movie of all time.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Harry Potter",
    description: "Boy get's touched when he is young and now keeps his assailants seed inside of him.",
    entertainmentTypeId: 1,
    genreId: 1,
  },
  {
    title: "Superman",
    description: "Worse than aquaman",
    entertainmentTypeId: 1,
    genreId: 1,
  },
]



export default function Dashboard() {
  const navigation = useNavigation();
  const handleClickRow = () => {
    console.log('navigate here')
  }
  return (
    <ScreenContainer style={styles.container}>
      <Text style={styles.title}>Top 10!</Text>
      <Table
        options={entertainments.map(entertainment => ({
          title: entertainment.title,
          ranking: entertainment.title.length,
          '': (
            <TouchableOpacity onPress={handleClickRow}>
              <Icon name="chevron-right" size={21} color={colors.primary.light} />
            </TouchableOpacity>
          )
        }))}
      />
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
