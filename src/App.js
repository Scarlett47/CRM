import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GridViewIcon from "@mui/icons-material/GridView";
import TuneIcon from "@mui/icons-material/Tune";
import { Search, Settings } from "@mui/icons-material";
import { Input } from "@mui/material";
import Contact from "./Pages/Contact";
import { Route, Routes, useNavigate } from "react-router";

const drawerWidth = 240;
const Icons = [
	<DashboardIcon />,
	<SplitscreenIcon />,
	<EmailIcon />,
	<PersonIcon />,
	<ChatBubbleIcon />,
	<GridViewIcon />,
	<TuneIcon />,
];

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function MiniDrawer() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar
					sx={{
						bgcolor: "white",
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon color="primary" />
					</IconButton>
					<Box
						sx={{
							width: "60%",
							display: "flex",
							gap: "20px",
							alignItems: "center",
						}}
					>
						<SearchIcon color="primary" />
						<Input type="search" placeholder="Global search" />
					</Box>
					<Box
						sx={{
							display: "flex",
							width: "40%",
							justifyContent: "flex-end",
						}}
					>
						5114330398
						<IconButton>
							<NotificationsNoneIcon color="primary" />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader color="secondary">
					<Typography
						sx={{
							marginRight: "50px",
							fontWeight: 600,
							fontSize: "18px",
							lineHeight: "25px",
							color: "#109CF1",
						}}
					>
						Saas Kit
					</Typography>
					<IconButton color="secondary" onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{/*["Dashboard", "Tasks", "Email", "Contact", "Chat", "Deals"] */}
				<List>
					{navItems.map((e, index) => (
						<ListItem
							href={e.href}
							key={index}
							disablePadding
							sx={{ display: "block" }}
						>
							<ListItemButton
								onClick={() => navigate(e.href)}
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{Icons[index]}
								</ListItemIcon>
								<ListItemText
									primary={e.label}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<Box
				sx={{
					marginTop: "100px",
					marginLeft: "100px",
				}}
			>
				<Routes>
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Box>
		</Box>
	);
}

const navItems = [
	{
		label: "Contact",
		href: "/contact",
	},
];
