import * as React from 'react'
import { Button } from 'antd'
import Avatar from '@mui/material/Avatar'
import "./chat.css";
import { left, right } from '@popperjs/core';


export default function Chat() {
    <p>fsdfsdfs</p>
    return (
        <div>
        <div className="smallBox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                    <Avatar
                     src={
                        "https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png"
                    }
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <p style={{ margin: 0, paddingLeft: 70, color:'gray' }} level={4}>
                    Send benefit review by Sunday
                </p>
                <Button type="primary" style={{ marginRight:10, }}>
                    Completed
                </Button>
            </div>
        </div>
        
        <div className="smallBox">
            <hr/>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                    <Avatar
                    src={
                        "https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png"
                    }
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <p style={{ margin: 0, paddingLeft: 70, color:'gray' }} level={4}>
                    Send benefit review by Sunday
                </p>
                <Button type="primary" style={{ marginRight:10, }}>
                    Completed
                </Button>
            </div>
        </div>
        <hr/>
        <div className="smallBox">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                    <Avatar
                    src={
                        "https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png"
                    }
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <p style={{ margin: 0, paddingLeft: 70, color:'gray' }} level={4}>
                    Send benefit review by Sunday
                </p>
                <Button type="primary" style={{ marginRight:10, }}>
                    Completed
                </Button>
            </div>
        </div>
    </div>
        
    )
    
}
console.log("sdasdada")
