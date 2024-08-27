import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import CustomNavbar from './components/navbar/CustomNavbar'
import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <CustomNavbar />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App
