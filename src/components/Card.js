import React from 'react';

export default function Card(prop) 
{
    let ok = true;

    if (prop.max != null && prop.value <= prop.max)
        ok = false;

    if (prop.min != null && prop.value >= prop.min)
        ok = false;

    return (
        <div style={{background: "black", padding: "10px", color: "white"}}>
            <div >
                <span style={{fontSize: "16px"}}>{prop.title}</span>
                <span style={{fontSize: "14px", paddingLeft: "5px"}} >{prop.subtitle}</span>
            </div>
            <div >
                <span style={{fontSize: "32px", display: "inline-block"}}>{prop.value}</span>
                <div style={{color: ok ? "red" : "green", borderColor: ok ? "red" : "green", borderWidth: "1px", borderRadius: "4px", fontSize: "18px", display: "inline-block"}}>
                    <span style={{paddingLeft: "5px"}}>{prop.min}</span>
                    <span style={{paddingLeft: "5px"}}>{prop.unit}</span>
                </div>
            </div>
        </div>);
}