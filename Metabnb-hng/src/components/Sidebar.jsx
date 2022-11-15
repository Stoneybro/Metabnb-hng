import React from 'react'

const Sidebar = ({menu}) => {
  return (
    <ul className='sidebar'>
        <img src="../src/assets/x.svg" alt="" className='close' onClick={menu}/>
    <li>Home</li>
    <li>Place to stay</li>
    <li>NFTs</li>
    <li>Community</li>
</ul>
  )
}

export default Sidebar