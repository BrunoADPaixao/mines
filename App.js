import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da grade:
          {params.getRowsAmount()} linhas e
          {params.getColumnsAmount()} colunas
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field opened nearMines={7} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
