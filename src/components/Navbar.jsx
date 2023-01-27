import React from "react";
import "../index.css";
import { Typography, useMediaQuery } from "@mui/material";
import logo from "../images/logo.png";
import styled from "styled-components";

const NavStyles = styled.div`
	nav {
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		background-color: transparent;
		width: 100%;
		height: 6rem;
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
	.center-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

function Device() {
	const pc = useMediaQuery("(min-width: 768px)");

	if (pc) {
		return (
			<NavStyles>
				<nav>
					<div className="nav-section">
						<div className="center-container">
							<a href="#">
								<img src={logo} id="logo" />
							</a>
							<a href="#">
								<Typography variant="p" sx={{ paddingLeft: 1.5, fontSize: 20 }}>
									NICK WRIGHT
								</Typography>
							</a>
						</div>
					</div>

					<div className="nav-section">
						<ul className="center-container">
							<li>
								<a href="#">
									<Typography variant="p">HOME</Typography>
								</a>
							</li>
							<li>
								<a href="#about">
									<Typography variant="p">ABOUT</Typography>
								</a>
							</li>
							<li>
								<a href="#projects">
									<Typography variant="p">PROJECTS</Typography>
								</a>
							</li>
							<li>
								<a href="#skills">
									<Typography variant="p">SKILLS</Typography>
								</a>
							</li>
							<li>
								<a href="#contact">
									<Typography variant="p">CONTACT</Typography>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</NavStyles>
		);
	} else {
		return (
			<NavStyles>
				<nav>
					<div className="nav-section">
						<div className="center-container">
							<a href="#">
								<img src={logo} id="logo" />
							</a>
							<a href="#">
								<Typography variant="p" sx={{ paddingLeft: 1.5, fontSize: 20 }}>
									NICK WRIGHT
								</Typography>
							</a>
						</div>
					</div>

					<div className="nav-section">
						<ul className="center-container">
							<li>
								<a href="#">
									<Typography variant="p">HOME</Typography>
								</a>
							</li>
							<li>
								<a href="#about">
									<Typography variant="p">ABOUT</Typography>
								</a>
							</li>
							<li>
								<a href="#projects">
									<Typography variant="p">PROJECTS</Typography>
								</a>
							</li>
							<li>
								<a href="#skills">
									<Typography variant="p">SKILLS</Typography>
								</a>
							</li>
							<li>
								<a href="#contact">
									<Typography variant="p">CONTACT</Typography>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</NavStyles>
		);
	}
}

const Navbar = () => {
	return (
		<NavStyles>
			<Device />
		</NavStyles>
	);
};

export default Navbar;
