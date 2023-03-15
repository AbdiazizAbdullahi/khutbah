import React from 'react';
import '../CSS/Sample.css';
import Blog from '../components/Blog';

function Sample() {
  return (
    // <div className="guide-wrapper">
    // <div className="guide-container">
    //   <h1 className="guide-title">A Beginner's Guide to Lorem Ipsum</h1>
    //   <p className="guide-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend, est sed sodales finibus, dolor ante fermentum dolor, vel facilisis libero mi sed massa. Nulla facilisi. Fusce vehicula elit vel sapien bibendum, id congue eros venenatis. </p>
    //   <h2 className="guide-subtitle">What is Lorem Ipsum?</h2>
    //   <p className="guide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin felis a metus semper, id malesuada neque venenatis. Nulla facilisi. Aliquam blandit laoreet ex, vel eleifend est pharetra sed. Duis in mi malesuada, tempor massa non, dictum metus. </p>
    //   <h2 className="guide-subtitle">Why Do We Use Lorem Ipsum?</h2>
    //   <p className="guide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed enim velit. Sed gravida, justo vel rhoncus facilisis, elit enim tristique nisi, vel rutrum nulla nibh id tortor. Sed vel sem in sem aliquet blandit ut vitae elit. </p>
    //   <h2 className="guide-subtitle">Where Does Lorem Ipsum Come From?</h2>
    //   <p className="guide-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit magna enim, a lacinia lectus dignissim a. Integer in mauris purus. Sed bibendum fringilla augue ac mattis. Sed pretium bibendum aliquet. </p>
    // </div>
    // </div>

    <div className="home">
            <div className="sample-guide">
                <div className="step-0">
                    <h1>Giude</h1>
                </div>
                <div className="step-1">
                    <h2 className="stepz">Step 1</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto enim officia tempora ut cumque laboriosam, sit eius nobis beatae illum dignissimos commodi dolore optio. Error optio aspernatur dolores eaque reiciendis!</p>
                </div>
                <div className="step-2">
                    <h2 className="stepz">Step 2</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto enim officia tempora ut cumque laboriosam, sit eius nobis beatae illum dignissimos commodi dolore optio. Error optio aspernatur dolores eaque reiciendis!</p>
                </div>
                <div className="step-3">
                    <h2 className="stepz">Step 3</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto enim officia tempora ut cumque laboriosam, sit eius nobis beatae illum dignissimos commodi dolore optio. Error optio aspernatur dolores eaque reiciendis!</p>
                </div>
                <div className="blog">
                    <h1>SAMPLE</h1>
                    <Blog/>
                </div>
            </div>
            
        </div>

  );
}

export default Sample;
