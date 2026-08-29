import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

import ProjectArt from "./ProjectArt";

const CardStyles = styled(motion.article)`
	display: flex;
	flex-direction: column;
	min-width: 0;
	height: 100%;
	overflow: hidden;
	background-color: var(--surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-lg);
	transition: border-color var(--transition), transform var(--transition),
		box-shadow var(--transition);

	&:hover {
		border-color: ${({ $accent }) => $accent || "var(--accent)"};
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
	}

	.visual {
		position: relative;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: ${({ $tone }) => $tone || "var(--surface-raised)"};
	}

	.visual svg {
		display: block;
		width: 100%;
		height: 100%;
		transition: transform 0.5s ease;
	}

	&:hover .visual svg {
		transform: scale(1.04);
	}

	.kind {
		position: absolute;
		top: 0.9rem;
		left: 0.9rem;
		padding: 0.28rem 0.7rem;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-primary);
		background: rgba(11, 13, 16, 0.72);
		border: 1px solid var(--border);
		border-radius: 999px;
		backdrop-filter: blur(10px);
	}

	.body {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 1.35rem 1.35rem 1.5rem;
	}

	.tagline {
		margin-top: 0.2rem;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: ${({ $accent }) => $accent || "var(--accent)"};
	}

	.description {
		margin-top: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.65;
	}

	.tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		list-style: none;
		margin-top: 1.1rem;
		padding: 0;
	}

	.tech li {
		padding: 0.28rem 0.65rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--text-secondary);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 999px;
	}

	.action {
		margin-top: auto;
		padding-top: 1.25rem;
	}

	&.is-wide {
		grid-column: 1 / -1;
	}

	@media only screen and (min-width: 900px) {
		&.is-wide {
			display: grid;
			grid-template-columns: minmax(280px, 1.05fr) minmax(0, 1.2fr);
			align-items: stretch;
		}

		&.is-wide .visual {
			aspect-ratio: auto;
			height: 100%;
			min-height: 280px;
		}
	}
`;

const ProjectCard = ({ project }) => {
	const headingId = `${project.id}-title`;

	return (
		<CardStyles
			className={project.wide ? "is-wide" : undefined}
			$accent={project.accent}
			$tone={project.tone}
			aria-labelledby={headingId}
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-48px" }}
			transition={{ duration: 0.45, ease: "easeOut" }}
		>
			<div className="visual">
				<ProjectArt project={project} />
				<span className="kind">{project.category}</span>
			</div>

			<div className="body">
				<Typography variant="h3" component="h3" id={headingId} sx={{ fontSize: "1.45rem" }}>
					{project.title}
				</Typography>
				<p className="tagline">{project.tagline}</p>
				<p className="description">{project.description}</p>

				{project.tech?.length > 0 && (
					<ul className="tech">
						{project.tech.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}

				{project.href && (
					<div className="action">
						<Button
							href={project.href}
							target="_blank"
							rel="noreferrer"
							variant="contained"
							color="secondary"
							endIcon={<OpenInNewIcon />}
						>
							{project.linkLabel}
						</Button>
					</div>
				)}
			</div>
		</CardStyles>
	);
};

export default ProjectCard;
