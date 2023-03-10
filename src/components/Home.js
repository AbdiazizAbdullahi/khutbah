import React from "react";
import { Link } from "react-router-dom"


function Home() {
    return(
        <div>
            <h1>Homepage</h1>
            <p>This is the homepage</p>
            <Link to="/upload" >Upload</Link>
            <br />
            <Link to="/allkhutbah" >All Khutbah</Link>
        </div>
    );
}

export default Home;