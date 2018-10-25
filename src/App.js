import React, { Component } from 'react';
import{Provider} from 'react-redux'
import Header from './common/header'
import Body from './common/body'

import store from './store'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
            <div>
                <Header />  
                <Body/>
            </div> 
          </Provider>
      </div>
    );
  }
}

export default App;
