import * as React from 'react'
import { Title } from '@mui/icons-material'
import { Button } from 'antd'
import Avatar from '@mui/material/Avatar'

export default function Chat() {
    <p>fsdfsdfs</p>
  return (
    <p>fdfsfs</p>,
    <div className="smallBox">
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Title style={{ margin: 0, paddingLeft: 10 }} level={4}>
								Send benefit review by Sunday
							</Title>
							<Title
								style={{
									margin: 0,
									paddingRight: 10,
									color: "#90A0B7",
								}}
								level={5}
							>
								Reminder
							</Title>
						</div>
						<Title
							style={{
								margin: 0,
								color: "#90A0B7",
								paddingLeft: 10,
							}}
							level={5}
						>
							Due to: <span style={{ color: "black" }}>December 23, 2018</span>
						</Title>
						<br />
						<br />
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div>
								<Avatar
									size={32}
									style={{
										marginLeft: 10,
										float: "left",
									}}
								/>
								<Title
									level={5}
									style={{ margin: 0, paddingLeft: 5, float: "left" }}
								>
									George Fields
								</Title>
							</div>
							<Button type="primary" style={{ marginRight: 10 }}>
								Completed
							</Button>
						</div>
					</div>
  )
}
console.log("sdasdada")
