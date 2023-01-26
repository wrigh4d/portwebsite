import React from "react";

// Import libraries
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";

// Import Components
import Carousel from "./Carousel";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ResponsiveLayout() {
	const device = useMediaQuery("(min-width: 1000px)");

	if (device) {
		return (
			<div className="projects">
				<div className="content">
					<Typography variant="h1">PROJECTS{"\n"}</Typography>
					<Typography variant="h5">-SWIPE THROUGH MY PROJECTS-</Typography>
				</div>

				<Carousel />
			</div>
		);
	} else
		return (
			<div className="projects-mobile">
				<div className="content-mobile">
					<Typography variant="h1">PROJECTS{"\n"}</Typography>
					<Typography variant="h5">-SWIPE THROUGH MY PROJECTS-</Typography>
				</div>

				<Carousel />
			</div>
		);
}

const Projects = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className="container">
					<section id="projects">
						<ResponsiveLayout />
					</section>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Projects;
