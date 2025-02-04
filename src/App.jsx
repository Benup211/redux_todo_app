import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import store from './redux/store'
import Todo from './components/Todo'
function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  )
}

export default App
