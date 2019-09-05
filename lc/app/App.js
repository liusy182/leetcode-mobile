import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import QuestionList from './components/questionList';
import Question from './components/question';
import Solution from './components/solution';

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <QuestionList />
            <Question />
            <Solution />
          </ScrollView>
        </SafeAreaView>
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