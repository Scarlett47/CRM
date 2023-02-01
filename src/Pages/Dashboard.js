import React from "react";
import "./dashboard.css";
import { Typography, Select, Progress, Calendar, Avatar, Button } from "antd";

export default function Dashboard() {
	const longEnUSFormatter = new Intl.DateTimeFormat("en-GB", {
		dateStyle: "full",
	});
	const date = longEnUSFormatter.format(new Date());

	const { Title } = Typography;
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const onPanelChange = (value, mode) => {
		console.log(value.format("YYYY-MM-DD"), mode);
	};
	return (
		<div className="container">
			<div className="box">
				<div className="boxTop">
					<Title level={4} style={{ margin: 0, color: "#334D6E" }}>
						8 task completed out of 10
					</Title>
					<Title level={4} style={{ margin: 0, color: "#707683" }}>
						Show:
						<Select
							defaultValue="This week"
							style={{
								width: 120,
							}}
							onChange={handleChange}
							bordered={false}
							options={[
								{
									value: "This week",
									label: "This week",
								},
								{
									value: "This month",
									label: "This month",
								},
								{
									value: "This year",
									label: "This year",
								},
							]}
						/>
					</Title>
				</div>
				<Progress
					percent={80}
					status="active"
					showInfo={false}
					style={{ padding: 10 }}
				/>
				<Title style={{ margin: 0, paddingLeft: 10 }} level={4}>
					{date}
				</Title>
				<Calendar
					onPanelChange={onPanelChange}
					style={{
						width: "100%",
						height: 150,
						overflow: "hidden",
					}}
				/>
				<hr />
				<br />
				<div className="boxBottom">
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
					<br />
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
				</div>
			</div>
		</div>
	);
}

// import React from "react";
// import { LinearProgress, Box, Typography, Avatar, Button } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
// import {
// 	LineChart,
// 	Line,
// 	CartesianGrid,
// 	XAxis,
// 	YAxis,
// 	Tooltip,
// } from "recharts";

// function Dashboard() {
// 	const longEnUSFormatter = new Intl.DateTimeFormat("en-GB", {
// 		dateStyle: "full",
// 	});
// 	const date = longEnUSFormatter.format(new Date());
// 	const names = [];
// 	const dateName = [
// 		{ id: "1", dName: "Mon" },
// 		{ id: "2", dName: "Tue" },
// 		{ id: "3", dName: "Wed" },
// 		{ id: "4", dName: "Thu" },
// 		{ id: "5", dName: "Fri" },
// 		{ id: "6", dName: "Sat" },
// 		{ id: "7", dName: "Sun" },
// 	];
// 	const data = [
// 		{ name: "2019", uv: 300, pv: 2400, amt: 2400 },
// 		{ name: "2020", uv: 400, pv: 2400, amt: 2400 },
// 		{ name: "2021", uv: 200, pv: 2400, amt: 2400 },
// 		{ name: "2022", uv: 100, pv: 2400, amt: 2400 },
// 		{ name: "2023", uv: 400, pv: 2400, amt: 2400 },
// 	];
// 	return (
// 		<>
// 			<Box
// 				sx={{
// 					height: 718,
// 					width: 635,
// 					border: "1px solid #e8e8e8",
// 					borderRadius: 2,
// 					padding: 2,
// 				}}
// 			>
// 				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
// 					<Typography
// 						sx={{
// 							fontWeight: 600,
// 							fontSize: "18px",
// 							lineHeight: "25px",
// 							paddingBottom: "10px",
// 						}}
// 					>
// 						8 task completed out of 10
// 					</Typography>
// 					<Typography
// 						sx={{
// 							fontWeight: 600,
// 							fontSize: "18px",
// 							lineHeight: "25px",
// 							paddingBottom: "10px",
// 						}}
// 					>
// 						Show:{" "}
// 						<FormControl>
// 							<NativeSelect
// 								defaultValue={1}
// 								disableUnderline
// 								sx={{
// 									marginTop: "-4px",
// 									fontWeight: 600,
// 									fontSize: "18px",
// 									color: "#109CF1",
// 								}}
// 							>
// 								<option value={1}>This week</option>
// 								<option value={2}>This months</option>
// 								<option value={3}>This year</option>
// 							</NativeSelect>
// 						</FormControl>
// 					</Typography>
// 				</Box>
// 				<LinearProgress
// 					variant="buffer"
// 					valueBuffer={100}
// 					value={80}
// 					color="success"
// 					sx={{
// 						width: "100%",
// 					}}
// 				/>
// 				<br />
// 				<Typography
// 					sx={{
// 						fontWeight: 600,
// 						fontSize: "18px",
// 						lineHeight: "25px",
// 						paddingBottom: "10px",
// 					}}
// 				>
// 					{date}
// 				</Typography>
// 				{/* <Box>
// 					<Box>
// 						<Typography>{names}</Typography>
// 					</Box>
// 				</Box> */}
// 				<Box
// 					sx={{
// 						width: "95%",
// 						height: "20%",
// 						margin: "15px",
// 						boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
// 						borderRadius: "4px",
// 					}}
// 				>
// 					<Box
// 						sx={{
// 							display: "flex",
// 							justifyContent: "space-between",
// 							padding: "20px 20px 0px 20px",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								fontWeight: 600,
// 								fontSize: "15px",
// 								lineHeight: "22px",
// 								letterSpacing: "0.01em",
// 							}}
// 						>
// 							Send benefit review by Sunday
// 						</Typography>
// 						<Typography
// 							sx={{
// 								fontWeight: 500,
// 								fontSize: "12px",
// 								lineHeight: "22px",
// 								letterSpacing: "0.01em",
// 								color: "#90A0B7",
// 							}}
// 						>
// 							Reminder
// 						</Typography>
// 					</Box>
// 					<Typography
// 						sx={{
// 							fontWeight: 500,
// 							fontSize: "12px",
// 							lineHeight: "22px",
// 							letterSpacing: "0.01em",
// 							color: "#90A0B7",
// 							padding: "0px 20px 20px 20px",
// 						}}
// 					>
// 						Due date: December 23, 2018
// 					</Typography>
// 					<Box
// 						sx={{
// 							display: "flex",
// 							justifyContent: "space-between",
// 							padding: "0px 20px 0px 20px",
// 						}}
// 					>
// 						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
// 							<Avatar
// 								src="https://cdn.pixabay.com/photo/2023/01/12/18/08/beach-7714610_960_720.jpg"
// 								sx={{ height: "30px", width: "30px" }}
// 							/>
// 							<Typography sx={{ padding: "0px 20px 0px 20px" }}>
// 								Alice Selena
// 							</Typography>
// 						</Box>
// 						<Button
// 							variant="contained"
// 							sx={{
// 								width: "150px",
// 								height: "30px",
// 								backgroundColor: "#2ED47A",
// 								"&:hover": {
// 									background: "#2ED47A",
// 								},
// 							}}
// 						>
// 							Completed
// 						</Button>
// 					</Box>
// 				</Box>
// 				<Box
// 					sx={{
// 						width: "95%",
// 						height: "20%",
// 						margin: "15px",
// 						boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
// 						borderRadius: "4px",
// 					}}
// 				>
// 					<Box
// 						sx={{
// 							display: "flex",
// 							justifyContent: "space-between",
// 							padding: "20px 20px 0px 20px",
// 						}}
// 					>
// 						<Typography
// 							sx={{
// 								fontWeight: 600,
// 								fontSize: "15px",
// 								lineHeight: "22px",
// 								letterSpacing: "0.01em",
// 							}}
// 						>
// 							Send benefit review by Sunday
// 						</Typography>
// 						<Typography
// 							sx={{
// 								fontWeight: 500,
// 								fontSize: "12px",
// 								lineHeight: "22px",
// 								letterSpacing: "0.01em",
// 								color: "#90A0B7",
// 							}}
// 						>
// 							Reminder
// 						</Typography>
// 					</Box>
// 					<Typography
// 						sx={{
// 							fontWeight: 500,
// 							fontSize: "12px",
// 							lineHeight: "22px",
// 							letterSpacing: "0.01em",
// 							color: "#90A0B7",
// 							padding: "0px 20px 20px 20px",
// 						}}
// 					>
// 						Due date: December 23, 2018
// 					</Typography>
// 					<Box
// 						sx={{
// 							display: "flex",
// 							justifyContent: "space-between",
// 							padding: "0px 20px 0px 20px",
// 						}}
// 					>
// 						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
// 							<Avatar
// 								src="https://cdn.pixabay.com/photo/2023/01/12/18/08/beach-7714610_960_720.jpg"
// 								sx={{ height: "30px", width: "30px" }}
// 							/>
// 							<Typography sx={{ padding: "0px 20px 0px 20px" }}>
// 								Alice Selena
// 							</Typography>
// 						</Box>
// 						<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
// 							<EditIcon
// 								sx={{
// 									height: "20px",
// 									width: "20px",
// 									color: "#C2CFE0",
// 									marginRight: "10px",
// 								}}
// 							></EditIcon>
// 							<DeleteIcon
// 								sx={{
// 									height: "20px",
// 									width: "20px",
// 									color: "#C2CFE0",
// 									marginRight: "10px",
// 								}}
// 							></DeleteIcon>
// 							<Button
// 								variant="contained"
// 								sx={{
// 									width: "150px",
// 									height: "30px",
// 									backgroundColor: "red",
// 									"&:hover": {
// 										background: "red",
// 									},
// 								}}
// 							>
// 								Ended
// 							</Button>
// 						</Box>
// 					</Box>
// 				</Box>
// 			</Box>
// 			<Box
// 				sx={{
// 					width: "650px",
// 					height: "350px",
// 					boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
// 					borderRadius: "4px",
// 				}}
// 			>
// 				{/* <Box
// 					sx={{
// 						width: "100%",
// 						height: "50px",
// 						backgroundColor: "green",
// 						display: "flex",
// 						justifyContent: "space-between",
// 					}}
// 				>
// 					<Typography>Deals</Typography>
// 				</Box> */}

// 				<Box
// 					sx={{
// 						width: "100%",
// 						height: "50px",
// 						display: "flex",
// 						justifyContent: "space-between",
// 						paddingTop: "10px",
// 						boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
// 						borderRadius: "4px",
// 					}}
// 				>
// 					<Typography
// 						sx={{
// 							fontWeight: 600,
// 							fontSize: "18px",
// 							lineHeight: "25px",
// 							paddingBottom: "10px",
// 						}}
// 					>
// 						Deals
// 					</Typography>
// 					<Typography
// 						sx={{
// 							fontWeight: 600,
// 							fontSize: "18px",
// 							lineHeight: "25px",
// 							paddingBottom: "10px",
// 						}}
// 					>
// 						Show:{" "}
// 						<FormControl>
// 							<NativeSelect
// 								defaultValue={1}
// 								disableUnderline
// 								sx={{
// 									marginTop: "-4px",
// 									fontWeight: 600,
// 									fontSize: "18px",
// 									color: "#109CF1",
// 								}}
// 							>
// 								<option value={1}>This week</option>
// 								<option value={2}>This months</option>
// 								<option value={3}>This year</option>
// 							</NativeSelect>
// 						</FormControl>
// 					</Typography>
// 				</Box>
// 				<br />
// 				<LineChart
// 					width={600}
// 					height={300}
// 					data={data}
// 					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
// 				>
// 					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
// 					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// 					<XAxis dataKey="name" />
// 					<YAxis />
// 					<Tooltip />
// 				</LineChart>
// 			</Box>
// 		</>
// 	);
// }

// export default Dashboard;
