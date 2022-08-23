import React from "react";
import Navbar from "./Navbar";
function Blog()
{
    return(
        <>
        <Navbar/>
        <center><h1>The Fraise Blog</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        <br/>
        <br/>
        <br/>
        <button className="btn btn-light">All posts</button>
        </center>
        <br/>
        <br/>
        <div className="card-group">
            <div className="card">
                <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg/v1/fill/w_568,h_851,fp_0.50_0.50,q_90,enc_auto/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg" height="800" width="500"/>
                    <h1>Re-using Candles</h1>
                    <h3>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h3>
                </div>
            </div>
            <div className="card">
                <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg/v1/fill/w_568,h_851,fp_0.50_0.50,q_90,enc_auto/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.webp" height="800" width="500"/>
                    <h1>How to pick the right scent</h1>
                    <h3>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h3>
                </div>
            </div>
        </div>
        <div className="card-group">
        <div className="card">
                <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg/v1/fill/w_568,h_821,fp_0.50_0.50,q_90,enc_auto/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.webp"/>
                    <h1>5 ways of taking care of yor candles</h1>
                    <h3>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h3>
                </div>
            </div>
            <div className="card">
                <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_f793d33e8cdb4937a094525717f38ab6~mv2.jpg/v1/fill/w_568,h_851,fp_0.50_0.50,q_90,enc_auto/c837a6_f793d33e8cdb4937a094525717f38ab6~mv2.webp" height="800" width="500"/>
                    <h1>How to make your own soap
                    </h1>
                    <h3>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h3>
                </div>
            </div>
        </div>
        </>

    );
}
export default Blog;