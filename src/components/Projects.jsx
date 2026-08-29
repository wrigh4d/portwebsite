import React from "react";
import styled from "styled-components";

import Section from "./Section";
import ProjectCard from "./ProjectCard";
import PROJECTS from "../data/projects";

const GridStyles = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	gap: 1.25rem;

	@media only screen and (min-width: 768px) {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1.5rem;
	}
`;

const Projects = () => (
	<Section
		id="projects"
		eyebrow="Portfolio"
		title="Projects"
		subtitle="A selection of things I have designed, built and shipped."
	>
		<GridStyles>
			{PROJECTS.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</GridStyles>
	</Section>
);

export default Projects;
