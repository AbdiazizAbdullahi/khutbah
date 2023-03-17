import React from 'react'
import '../CSS/Header.css'

const Header = () => {
  return (
    <div className='cont'>
      {/* <div className="logo">
        <h3>Lorem</h3>
      </div> */}
      <div className="why">
        <h3>Why choose Lorem?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officia! Delectus perspiciatis maxime ratione sunt  adipisci!</p>
      </div>
      <div className="benefits">
        <h3>Benefits of using Lorem</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore distinctio, aspernatur tempore quis, perspiciatis ducimus sequi voluptas.</p>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <form action="submit">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="description" />
          <button className='feedback'>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Header