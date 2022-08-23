import React from "react";
import Navbar from "./Navbar";
function Contactus() {
    return (
        <>
        <Navbar/>
        <center>            <h4>
                <button className="btn btn-light">GET IN TOUCH</button>
                <br/>
                Opening Hours
                <br/>
                Mon - Fri: 8am - 8pm
                <br/>
                Saturday: 9am - 7pm
                <br/>
                Sunday: 9am - 8pm
                <br/>
            </h4>
            <br/>
            <br/>
            <br/>
            <h4>
            Address
                <br/>
                500 Terry Francois Street
                <br/>
                San Francisco, CA 94158
                <br/>
                123-456-7890
            </h4>
            <p>info@mysite.com</p>
            <br/>
            <br/>
            <br/>
            <form className="" method="post">
                <label for="">First Name: </label>
                <input type="text" name="fname" placeholder="Enter First Name"/>
                <br/>
                <label for="">Last Name: </label>
                <input type="text" name="fname" placeholder="Enter Last Name"/>
                <br/>
                <label for="">Phone Number: </label>
                <input type="phone" name="fname" placeholder="Enter Phone Number"/>
                <br/>
                <label for="">Leave Me A Message: </label>
                <br/>
                <textarea name="CS" rows="4" cols="20" placeholder="Write your messages"></textarea>
                <br/>  
                <input type="submit" value="submit"/>
                
            </form>
            <img src="https://www.brambleberry.com/on/demandware.static/-/Sites-brambleberry-Library/default/dw93dda315/images/articles/art0171-art0190/art0172-candle-recipes-berry-candles.jpg"/>
            </center>


        </>
    );
}
export default Contactus;