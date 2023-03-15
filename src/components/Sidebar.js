import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Sidebar.css'


function Sidebar() {
  return (
    <div className="header">
    <div className="sidebar">
        <div className="profile">
            <p>PROFILE</p>
        </div>
        <div className="menu">
            <Link to={'/'}>HOME</Link>
            <Link to={'/sample'}>SAMPLE</Link>
            <Link to={'/submit'}>SUBMIT</Link>
            <Link to={'/guide'}>MY SUBS</Link>
        </div>
        <div className="logout">
            <Link to={'/login'}>LOGOUT</Link>
        </div>
    </div>
    </div>
  )
}

export default Sidebar; 