import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import Section from "./Section";
import PhotoAlbum from "./PhotoAlbum";
import resume from "../images/resume.pdf";

const PARAGRAPHS = [
	"I’m a computer science graduate and a programmer who likes building things that remove busywork. At United Wholesale Mortgage - the nation’s #1 mortgage company - I design and implement solutions that automate the mortgage underwriting process, including AI-assisted bank statement analysis and data extraction.",
	"Day to day I work in a large ASP.NET microservice codebase, focused on building scalable, performant and user-friendly features. I care about writing code that is effective now and still readable a year from now.",
	"Outside of work I travel with a goal of visiting all 63 national parks, play a lot of board games, take photographs, and build side projects that stretch my creative and technical range.",
	"I’m at my best solving complex problems alongside people who want to build something genuinely useful. Let’s connect.",
];

const AboutStyles = styled.div`
	.about__grid {
		display: grid;
		grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
		gap: 3rem;
		align-items: start;
	}

	.about__text > * + * {
		margin-top: 1.25rem;
	}

	.about__resume {
		margin-top: 2rem;
	}

	@media only screen and (max-width: 900px) {
		.about__grid {
			grid-template-columns: minmax(0, 1fr);
			gap: 2rem;
		}
	}
`;

const About = () => (
	<Section id="about" eyebrow="Who I am" title="About me">
		<AboutStyles>
			<div className="about__grid">
				<PhotoAlbum />

				<div className="about__text">
					{PARAGRAPHS.map((paragraph) => (
						<Typography variant="h5" component="p" key={paragraph.slice(0, 32)}>
							{paragraph}
						</Typography>
					))}

					<Button
						className="about__resume"
						variant="contained"
						color="primary"
						href={resume}
						rel="noreferrer"
						target="_blank"
						startIcon={<DownloadIcon />}
					>
						Download résumé
					</Button>
				</div>
			</div>
		</AboutStyles>
	</Section>
);

export default About;
