import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import logo from "../images/logo.webp";
import styled from "styled-components";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';

const NavStyles = styled.div`
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		width: 100%;
		height: 88px;
		margin: 0 auto;
		z-index: 100;
	}
	nav .nav-section {
		width: 292px;
		height: 48px;
		background-color: #2a2a2a;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	li {
		font-size: 20px;
		list-style: none;
		position: relative;
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: #fff;
		transition: 0.3s ease-in-out;
	}
	a:hover {
		color: #000;
		transform: scale(0.97);
	}
	#logo {
		height: 1rem;
	}
	.mobile-logo {
		height: 20px;
	}
	.center-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

const theme = createTheme({
	palette: {
		primary: {
			main: "#2a2a2a",
		},
	},
});

const Navbar = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavStyles>
				<nav>
					<div className="nav-section">
						<ul className="center-container">
							<li>
								<a href="/#">
									<img src={logo} alt="" id="logo" />
								</a>
							</li>
							<li>
								<a href="/#about">
									<AccountBoxIcon/>
								</a>
							</li>
							<li>
								<a href="/#projects">
									<FolderIcon/>
								</a>
							</li>
							<li>
								<a href="/#skills">
									<WorkIcon/>
								</a>
							</li>
							<li>
								<a href="/#contact">
									<EmailIcon/>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</NavStyles>
		</ThemeProvider>
	);
};

export default Navbar;
