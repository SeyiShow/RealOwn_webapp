import React, { useState } from "react";
import "./loginreg.css"
import daniel from "../../assets/daniel.jpg";

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState();

    return (
        <section>
            <div className="imgBx">
                <img src={daniel} className="" alt="" />
            </div>
            <div className="contentBx">
             <div className="formBx">
                <h2>Continue Registration</h2>
                <text>Input your full details to continue</text>
                <form>
                    <div className="inputBx">
                        <span>First Name</span>
                        <input type="text" placeholder="First Name" value="" />
                    </div>
                    <div className="inputBx">
                        <span>Last Name</span>
                        <input type="text" placeholder="Last Name" value="" />
                    </div>
                    <div className="inputBx">
                        <span>Phone Number</span>
                        <input type="tel" placeholder="+234823456789" value="" />
                        <text>Must match your NIN number</text>
                    </div>
                    <div className="inputBx">
                        <span>Address</span>
                        <input type="text" placeholder="Address" value="" />
                    </div>
                    <div className="inputBx">
                        <span>City</span>
                        <input type="text" placeholder="City" value="" />
                    </div>
                    <div className="inputBx">
                        <span>State</span>
                        <input type="text" placeholder="State" value="" />
                    </div><div className="inputBx">
                        <span>Zip Code</span>
                        <input type="text" placeholder="Zip Code" value="" />
                    </div>
                    <div className="inputBx">
                        <span>Date Of Birth</span>
                        <input type="date" placeholder="" value="" />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Next" name="" />
                    </div>
                </form>
             </div>
            </div>
        </section>
    )
}

export default LoginForm