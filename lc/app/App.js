import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import QuestionList from './components/questionList';

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <QuestionList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});