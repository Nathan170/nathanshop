import React from "react";
import Navbar from "./Navbar";
function Shop() {
    return (
        <>
        <Navbar/>
        <div className="card-group">
                <div className="card">
                    <div className="card=body">
                        <img src="https://static.wixstatic.com/media/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg/v1/fill/w_336,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.webp" height="300" width="300"/>
                        <h3>Re-using candles</h3>
                        <h4>
                        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
                        </h4>
                    </div>
                </div>
                <div className="card">
                    <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg/v1/fill/w_338,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.webp" height="300" width="300"/>
                        <h3>How to pick the right scent</h3>
                        <h4>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</h4>

                    </div>
                </div>
                <div className="card">
                    <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg/v1/fill/w_336,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.webp" height="300" width="300"/>
                    <h3>Five ways to take care of your candles</h3>
                    <h4>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your</h4>
                    </div>
                </div>
            </div>
            <center><button type="button" className="btn btn-light">Learn More</button></center>
        <br/>
        <br/>
        <br/>
            <center><h1>Most Popular!</h1></center>
            <div className="card-group">
                <div className="card">
                    <div className="card=body">
                        <img src="https://static.wixstatic.com/media/c837a6_71cb6826e409476a8bf5fc808e5025a5~mv2.jpg/v1/fill/w_339,h_451,al_c,q_80,usm_0.66_1.00_0.01/c837a6_71cb6826e409476a8bf5fc808e5025a5~mv2.webp" height="300" width="300"/>
                        <h3>Lavender</h3>
                        <h4>Used to be : $85.00
                            Now: $85.75
                        </h4>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="card">
                    <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_33e611f654b84ee38aa5ae8de03bc995~mv2.jpg/v1/fill/w_339,h_451,al_c,q_80,usm_0.66_1.00_0.01/c837a6_33e611f654b84ee38aa5ae8de03bc995~mv2.webp" height="300" width="300"/>
                        <h3>Pearl Powder</h3>
                        <h4>$85.00</h4>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="card">
                    <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_aa130046099845469457b74644824663~mv2.jpg/v1/fill/w_339,h_451,al_c,q_80,usm_0.66_1.00_0.01/c837a6_aa130046099845469457b74644824663~mv2.webp" height="300" width="300"/>
                    <h3>Coco Sandelwood</h3>
                    <h4>Used to be : $15.00
                            Now: $14.25</h4>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div className="card">
                    <div className="card=body">
                    <img src="https://static.wixstatic.com/media/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.jpg/v1/fill/w_339,h_451,al_c,q_80,usm_0.66_1.00_0.01/c837a6_e2ac14427adf46bda9a01b4a736fc5bf~mv2.webp" height="300" width="300"/>
                    <h3>Aromatic Blend</h3>
                    <h4>Used to be : $10.00
                            Now: $9.50</h4>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Shop;