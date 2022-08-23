import React from "react";
function Services() {
    return (
        <>
            <center><h1>Our Services</h1></center>
            <div className="card-group" >
                <div className="card border-dark bg-info text-dark">
                    <div className="card=body">
                        <h2>Light Package</h2>
                        <p>I will design up to 1 responsive website for your buisness.</p>
                        <p>$35</p>
                        <button className="btn btn-dark">Book Now</button>
                    </div>
                </div >
                <div className="card border-dark bg-info text-dark">
                    <div className="card=body">
                        <h2>Standard Package</h2>
                        <p>I will design up to 4 responsive websites for your buisness.</p>
                        <p>$100</p>
                        <button className="btn btn-dark">Book Now</button>
                    </div>
                </div>
                <div className="card border-dark bg-info text-dark">
                    <div className="card=body">
                        <h2>Power Packager</h2>
                        <p>I will design up to 7 responsive websites for your buisness.</p>
                        <p>$180</p>
                        <button className="btn btn-dark">Book Now</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    )

}
export default Services;