import React, { useEffect } from "react";

// Import libraries
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// Import Components
import Carousel from "./Carousel";
import MobileCarousel from "./MobileCarousel";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ProjectsStyles = styled.div`
	padding: 2.5rem 0;
	text-align: center;
	.header {
		padding: 1rem;
	}
`;

function ResponsiveLayout() {
	const device = useMediaQuery("(min-width: 768px)");

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 1.5,
					bounce: 0.5,
				},
			});
		}
		if (!inView) {
			animation.start({ x: "-100vw" });
		}
	}, [inView]);

	if (device) {
		return (
			<>
				<div className="header" ref={ref}>
					<Typography variant="h1">PROJECTS</Typography>
					<motion.div animate={animation}>
						<Typography variant="h5">-SWIPE THROUGH MY PROJECTS-</Typography>
					</motion.div>
				</div>
				<Carousel />
			</>
		);
	} else
		return (
			<>
				<div className="header" ref={ref}>
					<Typography variant="h1">PROJECTS</Typography>
					<motion.div animate={animation}>
						<Typography variant="h6">-SWIPE THROUGH MY PROJECTS-</Typography>
					</motion.div>
				</div>
				<MobileCarousel />
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
