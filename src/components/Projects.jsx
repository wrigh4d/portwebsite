import React from "react";

// Import libraries
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";

// Import Components
import Carousel from "./Carousel";
import MobileCarousel from "./MobileCarousel";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ProjectsStyles = styled.div`
	padding: 5rem 0;
	text-align: center;
	.header {
		padding: 2rem;
	}
	@media only screen and (max-width: 768px) {
		padding: 1rem 0;
	}
`;

function ResponsiveLayout() {
	const device = useMediaQuery("(min-width: 768px)");

	if (device) {
		return (
			<>
				<div className="header">
					<Typography variant="h1">PROJECTS</Typography>
					<Typography variant="h5">-SWIPE THROUGH MY PROJECTS-</Typography>
				</div>
				<div className="projects-content">
					<Carousel />
				</div>
			</>
		);
	} else
		return (
			<>
				<div className="projects-mobile">
					<div className="header">
						<Typography variant="h1">PROJECTS</Typography>
						<p>-SWIPE THROUGH MY PROJECTS-</p>
					</div>
					<MobileCarousel />
				</div>
			</>
		);
}

const Projects = () => {
	return (
		<ThemeProvider theme={theme}>
			<ProjectsStyles id="projects">
				<section>
					<ResponsiveLayout />
				</section>
			</ProjectsStyles>
		</ThemeProvider>
	);
};

export default Projects;
