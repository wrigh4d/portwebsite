import React from "react";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import PCNav from "./PCNav";

const NavStyles = styled.div`
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		background-color: #2a2a2a;
		width: 100%;
		height: 5rem;
		margin: 0 auto;
		left: 0;
		top: 0;
		z-index: 100;
	}
	nav .nav-section {
		padding: 0 80px;
		display: flex;
	}
	li {
		font-size: 20px;
		list-style: none;
		padding: 0 20px;
		position: relative;
	}
	a {
		text-decoration: none;
		color: #fff;
		transition: 0.3s ease-in-out;
	}
	a:hover {
		color: #000;
		transform: scale(0.97);
	}
	#logo {
		height: 2rem;
	}
	.mobile-logo {
		height: 25px;
	}
	.center-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const theme = createTheme({
	palette: {
		primary: {
			main: "#2a2a2a",
		},
	},
});

function Device() {
	const pc = useMediaQuery("(min-width: 768px)");

	if (pc) {
		return (
			<NavStyles>
				<PCNav />
			</NavStyles>
		);
	} else {
		return (
			<NavStyles>
				<MobileNav />
			</NavStyles>
		);
	}
}

const Navbar = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavStyles>
				<Device />
			</NavStyles>
		</ThemeProvider>
	);
};

export default Navbar;
