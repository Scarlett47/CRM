import * as React from 'react'
import { Button } from 'antd'
import {gray} from '@ant-design/colors'
import Avatar from '@mui/material/Avatar'
import "./chat.css";
import { left, right } from '@popperjs/core';
import { Progress, Space } from 'antd';
import { light } from '@mui/material/styles/createPalette';

<meta name="theme-color" content="#4285f4" />
export default function Chat() {
    console.log(gray.primary)
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
                                marginTop: 20,
                            }}
                        />
                        <p
                            level={5}
                            style={{ margin: 0, paddingLeft: 10, float: "left", marginTop: 30, }}
                        >
                            George Fields
                        </p>
                    </div>

                    <p
                        style={{
                            margin: 0,
                            paddingRight: 10,
                            color: "#d3d3d3",
                            fontSize: 14,
                        }}
                        level={5}
                    >
                        Due to: <span style={{ color: "lightgrey" }}>December 23, 2018</span>
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ margin: 0, paddingLeft: 70, color: 'gray' }} level={4}>
                        Send benefit review by Sunday
                    </p>
                    <Space wrap>
                        <Progress type="circle" percent={100} width={25} style={{marginRight:"10px"}} />
                    </Space>
                </div>
            </div>

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
                                marginTop: 20,

                            }}
                        />
                        <p
                            level={5}
                            style={{ margin: 0, paddingLeft: 10, float: "left", marginTop: 30, }}
                        >
                            George Fields
                        </p>
                    </div>

                    <p
                        style={{
                            margin: 0,
                            paddingRight: 10,
                            color: "#d3d3d3",
                            fontSize: 14,
                        }}
                        level={5}
                    >
                        Due to: <span style={{ color: "lightgrey" }}>December 23, 2018</span>
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ margin: 0, paddingLeft: 70, color: 'gray' }} level={4}>
                        Send benefit review by Sunday
                    </p>
                    <Space wrap>
                    </Space>
                        <Progress type="circle" percent={100} width={25} content="#4285f4" style={{marginRight:"10px",}}/>
                </div>
            </div>

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
                                marginTop: 20,

                            }}
                        />
                        <p
                            level={5}
                            style={{ margin: 0, paddingLeft: 10, float: "left", marginTop: 30, }}
                        >
                            George Fields
                        </p>
                    </div>

                    <p
                        style={{
                            margin: 0,
                            paddingRight: 10,
                            color: "#d3d3d3",
                            fontSize: 14,
                        }}
                        level={5}
                    >
                        Due to: <span style={{ color: "lightgrey" }}>December 23, 2018</span>
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ margin: 0, paddingLeft: 70, color: 'gray' }} level={4}>
                        Send benefit review by Sunday
                    </p>
                    <Button type="primary" style={{ marginRight: 10, }}>
                        Completed
                    </Button>
                </div>
            </div>
        </div>

    )

}
console.log("sdasdada")
