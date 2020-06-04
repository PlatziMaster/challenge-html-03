import React from 'react'

import './MainHero.styl'

const MainHero = () => {
  return (
    <>
      <div className='Hero-content'>
        <div className='Hero-title'>
          <h1>404</h1>
          <h2>Lost in Space</h2>
          <h3>It seems you are lost in space</h3>
          <a href='#' className='btn'>
            Back to home
          </a>
        </div>
        <div className='Hero-image'>
          <figure>
            <img src='https://arepa.s3.amazonaws.com/astro1.png' alt='404' />
          </figure>
        </div>
      </div>
    </>
  )
}

export default MainHero
