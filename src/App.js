import React from 'react'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'
import Alert from './Components/Alert/Alert'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './Components/Main/Main'
import IphonePage from './Components/Pages/IphonePage';
import IphoneDetail from './Components/Pages/IphoneDetail';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<><Alert /><Main /> </>} />
          <Route path="/iphone" element={<IphonePage />} />
          <Route path="/iphone/:iphoneid" element={<IphoneDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

