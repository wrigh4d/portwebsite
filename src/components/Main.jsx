import React from "react";

// Imports Images
import square from "../images/headshot.jpg";

// Imports Libraries
import { Button, ButtonGroup, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const MainStyles = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	.headshot {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 100%;
		max-width: 300px;
		width: 90%;
		align-items: center;
	}
	.text {
		padding: 1.5rem;
	}
	@media only screen and (max-width: 768px) {
		padding: 0;
	}
`;

const Main = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<MainStyles id="home">
					<img src={square} alt="" className="headshot" />
					<div className="header">
						<Typography variant="h1">Nick Wright</Typography>
						<Typography variant="h3">
							Student at Central Michigan University
						</Typography>
						<Typography variant="p">
							Major: Computer Science, Minor: Multimedia Design
						</Typography>
					</div>
					<ButtonGroup
						variant="text"
						aria-label="text button group"
						sx={{
							margin: "10px",
						}}
					>
						<Button
							variant="contained"
							type="submit"
							href="#contact"
							sx={{ backgroundColor: "black" }}
						>
							Contact Me
						</Button>
						<Button
							variant="contained"
							href="../images/resume.pdf"
							download
							sx={{ backgroundColor: "black" }}

							// endIcon={}
						>
							Download Resume
						</Button>
					</ButtonGroup>
				</MainStyles>
			</ThemeProvider>
		</>
	);
};

export default Main;
