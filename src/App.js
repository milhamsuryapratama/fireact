import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoPage from './components/TodoPage';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoPage/>
        </div>
      </Provider>
    );
  }
}

export default App;
