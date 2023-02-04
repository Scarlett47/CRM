import * as React from 'react'
import { Button } from 'antd'
import Avatar from '@mui/material/Avatar'
import "./chat.css";
import { left, right } from '@popperjs/core';


export default function Chat() {
    <p>fsdfsdfs</p>
    return (
        <div className="smallBox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                    <Avatar
                        size={32}
                        style={{
                            marginLeft: 10,
                            float: "left",
                            marginTop:20,
                        }}
                    />
                    <p
                        level={5}
                        style={{ margin: 0, paddingLeft: 10, float: "left", marginTop:30, }}
                    >
                        George Fields
                    </p>
                </div>
                
                <p
                    style={{
                        margin: 0,
                        paddingRight: 10,
                        color: "#d3d3d3",
                        fontSize:14,
                    }}
                    level={5}
                >
                     Due to: <span style={{ color:"lightgrey" }}>December 23, 2018</span>
                </p>
            </div>
            {/* <p
                style={{
                    margin: 0,
                    color: "#90A0B7",
                    paddingLeft: 10,
                }}
                level={5}
            >
                Due to: <span style={{ color: "black" }}>December 23, 2018</span>
            </p> */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <p style={{ margin: 0, paddingLeft: 70, color:'gray' }} level={4}>
                    Send benefit review by Sunday
                </p>
                <Button type="primary" style={{ marginRight:10, }}>
                    Completed
                </Button>
            </div>
        </div>
        
    )
    
}
console.log("sdasdada")
