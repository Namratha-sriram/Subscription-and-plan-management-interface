//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter} from "react-router-dom"
import SideBar from "./sidebar/SideBar"
function App() {

  return (
    <div>
      <BrowserRouter>
        <SideBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
