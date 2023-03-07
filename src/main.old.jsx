import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import './index.css'
import { App } from './App'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
})
const store = createStore(reducer)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <div /> */}
    </Provider>
  </React.StrictMode>
)
