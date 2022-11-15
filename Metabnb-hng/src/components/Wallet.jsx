import React from 'react'

const Wallet = () => {
  return (
    <div className='wallet'>
        <div className="wallet-head">Connect wallet <img src="../src/assets/x.svg" alt="" /></div>
        <div className="wallet-body">
            choose your preferred wallet:
            <div>
                <img src="../src/assets/image 66.svg" alt="" /><span>Metamask</span><img src="" alt="" />
            </div>
            <div>
            <img src="../src/assets/image 69.svg" alt="" /><span>Walletconnect</span><img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Wallet