import React from "react";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import pdf from "../images/resume.pdf";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const FooterStyles = styled.div`
	position: relative;
	bottom: 0;
	height: 300px;
	width: 100%;
	background-color: #2a2a2a;
	padding-top: 100px;
	margin-top: 2.5rem;
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		max-width: 99.6rem;
		margin: 0 auto;
	}
	.col {
		flex-direction: column;
		color: white;
		align-items: flex-start;
	}
	.col:last-child {
		flex-direction: row;
		justify-content: center;
	}
	.col:last-child span a {
		font-size: 2.5rem;
		margin-right: 0.5rem;
		color: white;
	}
	.col a {
		text-decoration: none;
		color: white;
		font-size: 1.5rem;
		padding: 0.5rem;
		font-weight: 300;
		transition: 0.3s ease-in-out;
	}
	.col a:hover {
		color: #000;
		transform: scale(0.97);
	}
	.col h4 {
		margin-bottom: 1rem;
	}
	@media only screen and (max-width: 768px) {
		padding: 50px 0;
		.row {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
		}
		.col {
			padding: 10px 20px;
		}
	}
`;

const Footer = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<FooterStyles>
					<div className="row">
						<div className="col d-flex">
							<h4>INFORMATION</h4>
							<a href="#home">HOME</a>
							<a href="#about">ABOUT</a>
							<a href="#projects">PROJECTS</a>
						</div>
						<div className="col d-flex">
							<h4>USEFUL LINKS</h4>
							<a href={pdf} download>
								DOWNLOAD RESUME
							</a>
						</div>
						<div className="col d-flex">
							<span>
								<a href="https://www.linkedin.com/in/nick-wright12/">
									<i className="bx bxl-linkedin-square" />
								</a>
							</span>
							<span>
								<a href="https://www.instagram.com/nick.wright.00/">
									<i className="bx bxl-instagram-alt" />
								</a>
							</span>
							<span>
								<a href="https://github.com/wrigh4d">
									<i className="bx bxl-github" />
								</a>
							</span>
						</div>
					</div>
				</FooterStyles>
			</ThemeProvider>
		</>
	);
};

export default Footer;
