import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import reducer from './features/counter.tsx'

const store = configureStore({
  reducer:{
    counter : reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
