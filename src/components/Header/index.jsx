import React from 'react'

import './Header.styl'

const Header = () => {
  return (
    <div className='Hero-head'>
      <div className='Hero-logo'>
        <h3>Mi Site</h3>
      </div>
      <div className='Hero-nav'>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
