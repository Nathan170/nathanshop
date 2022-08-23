import React from "react";
function Contact() {
    return (
        <>

            <div className="card-group">
                <div className="card">
                    <div className="card=body">
                        <img src="https://cdn.thefabricator.com/a/building-a-better-future-in-sheet-metal-forming-how-sharing-secrets-and-knowledge-can-benefit-the-supply-chain-1502802317.jpg" width="750" height="600" />
                    </div>
                </div>
                <div className="card">
                    <div className="card=body bg-info">
                        <h1 className="bg-info">Contact</h1>
                        <form className="bg-info" method="post">
                            <label for="">Write Your Name: </label>
                            <br />
                            <input type="text" name="fname" placeholder="Enter Your Name" />
                            <br />
                            <br />
                            <br />
                            <label for="">Phone Number: </label>
                            <br />
                            <input type="phone" name="fname" placeholder="Enter Phone Number" />
                            <br />
                            <br />
                            <br />
                            <label for="">Subject:</label>
                            <br />
                            <input type="phone" name="fname" placeholder="Enter Subject" />
                            <br />
                            <br />
                            <br />
                            <label for="">Message: </label>
                            <br />
                            <textarea name="CS" rows="4" cols="20" placeholder="Write your messages"></textarea>
                            <br />
                            <br />
                            <br />
                            <br />
                            <input type="submit" value="submit" />
                            <input type="reset" value="reset" />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;