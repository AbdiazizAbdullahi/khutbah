import React from "react";
import { Link } from "react-router-dom"
import '../CSS/Home.css'


function Home() {
    return(
        <div className="main_page">
            <section className="hero">
            <h1>Welcome to Khutbah</h1>
            <p>The place where your opinoins matter</p>
            <button>Get Started</button>
            </section>

            <section className="upload">
                <Link to="/upload" >Upload</Link>
            </section>

            <section className="allkhutbah">
                <Link to="/allkhutbah" >All Khutbah</Link>
            </section>
        </div>
    );
}

export default Home;