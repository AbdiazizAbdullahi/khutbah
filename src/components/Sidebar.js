import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Sidebar.css'
import homeSvg from '../images/home.svg'
import userSvg from '../images/user.svg'
import logoutSvg from '../images/logout.svg'
import sampleSvg from '../images/sample.svg'
import prevSvg from '../images/prev.svg'
import submitSvg from '../images/submit.svg'


function Sidebar() {
  return (
    <div className="header">
    <div className="sidebar">
        <div className="user">
            <p> <img src={userSvg} alt="" /> PROFILE</p>
        </div>
        <div className="menu">
            <Link to={'/'}> <img src={homeSvg} alt="home" />  HOME</Link>
            <Link to={'/sample'}> <img src={sampleSvg} alt="" /> SAMPLE</Link>
            <Link to={'/submit'}> <img src={submitSvg} alt="" /> SUBMIT</Link>
            <Link to={'/mysubs'}> <img src={prevSvg} alt="" /> PREV SUBS</Link>
        </div>
        <div className="logout">
            <Link to={'/login'}> <img src={logoutSvg} alt="" /> LOGOUT</Link>
        </div>
    </div>
    </div>
  )
}

export default Sidebar; 