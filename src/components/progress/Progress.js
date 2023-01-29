import React, { useState, useEffect } from 'react'
import "./Progress.css";

export default function Progressbar() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if(filled < 100 && isRunning){
            setTimeout(() => setFilled(prev => prev += 2), 50)
                
    }
    },[filled, isRunning])
   return (
    <div>
    <div className="progressbar">
        <div style={{
        height: "100%",
        width: `${filled}%`,
        backgroundColor: "#abbcff",
        transition: "width 0.5s"
        }}></div>
        <h2 className='regs'>Registration Status</h2>
        <span className='progressPercent'>{ filled }%</span>
    </div>
    <button className="btn" onClick={() => setIsRunning(true)}>Complete Registration</button>
    </div>
)
}