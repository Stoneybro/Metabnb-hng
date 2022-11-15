import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Location from '../components/Location'
const Places = () => {
  const  Data = [
    {
      img:'../src/assets/Frame 151.png',
    },
    {
      img:'../src/assets/Frame 151 (1).png',
    },
    {
      img:'../src/assets/Frame 151 (2).png',
    },
    {
      img:'../src/assets/Frame 151 (3).png',
    },
    {
      img:'../src/assets/Frame 151 (4).png',
    },
    {
      img:'../src/assets/Frame 151 (5).png',
    },
    {
      img:'../src/assets/Frame 151 (6).png',
    },
    {
      img:'../src/assets/Frame 151 (7).png',
    },
    {
      img:'../src/assets/Frame 151 (8).png',
    },
    {
      img:'../src/assets/Frame 151 (9).png',
    },
    {
      img:'../src/assets/Frame 151 (10).png',
    },
    {
      img:'../src/assets/Frame 151 (11).png',
    },
    {
      img:'../src/assets/Frame 151 (12).png',
    },
    {
      img:'../src/assets/Frame 151 (13).png',
    },
    {
      img:'../src/assets/Frame 151 (14).png',
    },
    {
      img:'../src/assets/Frame 151 (15).png',
    },
   
  ]
  return (
    <>
    <Navbar />
    <Location />
    <div className='cards' >
      {Data.map(({img}, index) =>{
        return(
          <div className='card-cont' key={index}>
              <img src={img} alt="img" />
              <div className="card-textone"><span>Desert king</span><span className='mbt'>1MBT per night</span></div>
              <div className="card-texttwo"><span>2345km away</span><span className='available'>available for 2weeks stay</span></div>
                  <img src="../src/assets/Frame 59528.svg" alt="" className='stars' />
          </div>
            )
          }
          )
      }
      </div>
    <Footer />
    </>
  )
}

export default Places