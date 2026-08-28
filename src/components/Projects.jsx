import React from "react";
import { useMediaQuery } from "@mui/material";

import Section from "./Section";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<Section
			id="projects"
			eyebrow="Portfolio"
			title="Projects"
			subtitle="A selection of things I have designed, built and shipped."
		>
			<ProjectCarousel mobile={!isDesktop} />
		</Section>
	);
};

export default Projects;
