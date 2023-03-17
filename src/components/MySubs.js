import React from 'react'
import '../CSS/MySubs.css'
import { useNavigate } from 'react-router-dom'

const MySubs = () => {
    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        navigate('/status');
    }

  return (
    <div className='mySubs'>
        <div className="mySubs-header">
            <h2>Previous Submissions</h2>
        </div>
        <div className="status">
            <div onClick={handleClick}>Approved</div>
            <div onClick={handleClick}>Proccessing</div>
            <div onClick={handleClick}>Rejected</div>
        </div>
        <div className="recent-subs">
            <h2>Recent Submissions</h2>
            <p>1. lorem ipsum 1    <small>Submitted: 01.2023</small> </p>
            <p>2. Lorem ipsum 2    <small>Submitted: 02.2023</small></p>
            <p>3. Lorem ipsum 3    <small>Submitted: 03.2023</small></p>
        </div>
    </div>
  )
}

export default MySubs;