import React from 'react'
import Body from './Components/Body'
import appstore from './utils/appstore'
import {Provider} from "react-redux"

const App = () => {
  return (
    <div>
      <Provider store = {appstore} >
      <Body/>
      </Provider>
    </div>
  )
}

export default App
