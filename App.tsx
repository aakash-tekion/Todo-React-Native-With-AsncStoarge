/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './screens/RootScreen'
import store from './store/index.js';
import { TodoFormContextProvider } from './context/TodoFormContextProvider';
function App(): JSX.Element {
  return(
    <Provider store={store}>
      <TodoFormContextProvider>
        <AppContainer/>
      </TodoFormContextProvider>
    </Provider>
  )
}


export default App;
