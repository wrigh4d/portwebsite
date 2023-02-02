import { Typography } from '@mui/material';
import React from 'react';
import logo from "../images/logo.png";


export default function MobileNav() {
	return (
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
	);
}
