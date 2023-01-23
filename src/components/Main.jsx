import React from "react";

// Imports Images
import square from "../images/headshot.jpg";

// Imports MUI
import { Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Main = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className="container">
					<section id="home" className="main">
						<img
							src={square}
							alt=""
							style={{
								width: "400px",
								boxShadow:
									" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
								borderRadius: "100%",
							}}
						/>

						<div className="content">
							<Typography variant="h1">Nick Wright</Typography>
							<Typography variant="h3">
								Student at Central Michigan University
							</Typography>
							<Typography variant="p">
								Major: Computer Science, Minor: Multimedia Design
							</Typography>
							<br />
							<a href="#contact" className="btn">
								CONTACT ME
							</a>
						</div>
					</section>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Main;
