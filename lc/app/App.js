import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import rootReducer from './reducers'

import Home from './components/Home';
import Question from './components/Question';
import Solution from './components/Solution';
import Settings from './components/Settings';

const store = createStore(rootReducer)

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Question: { screen: Question },
    Solution: { screen: Solution },
    Settings: { screen: Settings },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}