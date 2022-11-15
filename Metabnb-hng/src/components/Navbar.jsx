import React from 'react'

const Navbar = ({modal}) => {
  return (
    <nav>
        <img src="../src/assets/Group (1).svg" alt="" />
        <ul className='nav-items'>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
        </ul>
        <button className='nav-button' onClick={modal}>Connect wallet</button>
    </nav>
  )
}

export default Navbar