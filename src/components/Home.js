import React from "react";
import '../CSS/Home.css'


function Home() {

    return(
        <div className="guide-wrapper">
            <div className="guide-container">
              <h1 className="guide-title">A Beginner's Guide to Lorem Ipsum</h1>
              <p className="guide-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend, est sed sodales finibus, dolor ante fermentum dolor, vel facilisis libero mi sed massa. Nulla facilisi. Fusce vehicula elit vel sapien bibendum, id congue eros venenatis. </p>
              <h2 className="guide-subtitle">What is Lorem Ipsum?</h2>
              <p className="guide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin felis a metus semper, id malesuada neque venenatis. Nulla facilisi. Aliquam blandit laoreet ex, vel eleifend est pharetra sed. Duis in mi malesuada, tempor massa non, dictum metus. </p>
              <h2 className="guide-subtitle">Why Do We Use Lorem Ipsum?</h2>
              <p className="guide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed enim velit. Sed gravida, justo vel rhoncus facilisis, elit enim tristique nisi, vel rutrum nulla nibh id tortor. Sed vel sem in sem aliquet blandit ut vitae elit. </p>
              <h2 className="guide-subtitle">Where Does Lorem Ipsum Come From?</h2>
              <p className="guide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit magna enim, a lacinia lectus dignissim a. Integer in mauris purus. Sed bibendum fringilla augue ac mattis. Sed pretium bibendum aliquet. </p>
            </div>
        </div>
    );
}

export default Home;