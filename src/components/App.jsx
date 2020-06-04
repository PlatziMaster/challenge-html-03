import React from 'react'

import Header from '../components/Header'
import Hero from '../components/MainHero'

import './App.styl'

const App = () => {
  return (
    <div className='App'>
      <div className='Hero'>
        <div className='Hero-container'>
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
