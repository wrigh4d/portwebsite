import React from "react";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import Carousel from "./Carousel";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div className="container">
					<section id="projects" className="projects">
						<div className="content">
							<Typography variant="p" sx={{ fontSize: 100 }}>
								PROJECTS
							</Typography>
							<br />
							<Typography variant="p" sx={{ fontSize: 25 }}>
								-SWIPE THROUGH MY PROJECTS-
							</Typography>
						</div>

						<Carousel />
					</section>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Projects;
