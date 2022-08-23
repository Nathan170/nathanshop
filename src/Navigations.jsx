import React from "react";
function NavB() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-info navbar-light">
                <div className="container-fluid">
                    <img src="https://www.allaboutbirds.org/guide/assets/photo/303352901-480px.jpg" className="bavbar-brand" height="70" width="200"/>
                        <a className="navbar-brand" href="">Nathan.Inc</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#vilo">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collpase navbar-collapse" id="vilo">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="FAQ.jsx">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="About.jsx">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="Services..jsx">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="Contact.jsx">Contact</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>

        </>
    )
}
export default NavB