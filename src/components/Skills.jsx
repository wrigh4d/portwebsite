import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import Section from "./Section";
import AboutInfoItem from "./AboutInfoItem";

const EXPERIENCE = [
	{
		title: "2023 — Now",
		items: ["Software Developer at United Wholesale Mortgage"],
	},
	{
		title: "2022",
		items: ["Software Developer Intern at United Wholesale Mortgage"],
	},
	{
		title: "2021 — 2023",
		items: ["Research Librarian Assistant at Central Michigan University"],
	},
	{
		title: "2018 — 2019",
		items: ["Kid's Camp Counselor at YMCA of Lansing"],
	},
];

const SKILLS = [
	{ title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
	{
		title: "Backend",
		items: ["C#", "ASP.NET", "Java", "SQL", "C", "Assembly"],
	},
	{ title: "Other", items: ["Unity", "Photoshop", "Illustrator", "InDesign"] },
];

const EDUCATION = [
	{
		title: "College",
		items: ["Central Michigan University — Mount Pleasant, MI"],
	},
];

const COURSES = [
	{
		title: "Computer science",
		items: [
			"CPS 180 — Principles of Computer Programming",
			"CPS 181 — Introduction to Data Structures",
			"CPS 210 — Computer Organization and Communications",
			"CPS 240 — Object-Oriented Programming, Analysis and Design",
			"CPS 282 — Intro to Multimedia Design",
			"CPS 340 — Advanced Data Structures and Algorithms",
			"CPS 360 — Computer Design & Architecture",
			"CPS 382 — Advanced Multimedia Design",
			"CPS 395 — Internship in Computer Science",
			"CPS 410 — Senior Design I",
			"CPS 450 — Programming Language Concepts",
			"CPS 470 — Introduction to Operating Systems",
			"CPS 498 — Senior Design II",
		],
	},
	{
		title: "Information technology",
		items: [
			"ITC 190 — Computer Hardware, Concepts & Install",
			"ITC 320 — Web App Development, Client-Side Script",
			"ITC 341 — Intro to Databases and Applications",
			"ITC 383 — Video Game Design",
		],
	},
	{
		title: "Multimedia design",
		items: [
			"ART 231 — Introduction to Graphic Design",
			"ART 235 — Logo and Identity Design",
			"BCA 223 — Video Production",
			"JRN 220 — Basic Media Photography",
			"MMD 495 — Multimedia Design Capstone",
		],
	},
];

const CLARKE_PROJECTS = [
	{
		label: "Historical Michigan Railroad",
		href: "https://libguides.cmich.edu/c.php?g=1253359",
	},
	{
		label: "John Greenleaf Whittier Collection",
		href: "https://clarke.omeka.net/exhibits/show/jgw/jgwabout",
	},
	{
		label: "J.O. Lewis Indigenous Portrait Collection",
		href: "https://clarke.omeka.net/exhibits/show/j-o--lewis-indigenous-portrait/j-o--lewis-indigenous-portrait",
	},
	{
		label: "Bird's-Eye View Collection",
		href: "https://clarke.omeka.net/exhibits/show/birdseyeviews/about",
	},
	{
		label: "Abundant Waters Exhibit",
		href: "https://abundantwaterscmich.omeka.net/",
	},
];

const SkillsStyles = styled.div`
	.group + .group {
		margin-top: 3.5rem;
	}

	.group__heading {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.5rem;
	}

	.links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 0.75rem;
		margin-top: 1.25rem;
	}

	.links .MuiButton-root {
		justify-content: space-between;
		text-align: left;
	}
`;

const Group = ({ heading, entries }) => (
	<div className="group">
		<Typography component="h3" className="group__heading">
			{heading}
		</Typography>
		{entries.map((entry) => (
			<AboutInfoItem key={entry.title} title={entry.title} items={entry.items} />
		))}
	</div>
);

const Skills = () => (
	<Section
		id="skills"
		eyebrow="Background"
		title="Skills & experience"
		subtitle="Where I have worked, what I use, and what I studied."
	>
		<SkillsStyles>
			<Group heading="Experience" entries={EXPERIENCE} />
			<Group heading="Skills" entries={SKILLS} />
			<Group heading="Education" entries={EDUCATION} />
			<Group heading="Relevant courses" entries={COURSES} />

			<div className="group">
				<Typography component="h3" className="group__heading">
					Clarke Historical Library projects
				</Typography>
				<div className="links">
					{CLARKE_PROJECTS.map(({ label, href }) => (
						<Button
							key={href}
							variant="contained"
							color="secondary"
							href={href}
							target="_blank"
							rel="noreferrer"
							endIcon={<OpenInNewIcon />}
						>
							{label}
						</Button>
					))}
				</div>
			</div>
		</SkillsStyles>
	</Section>
);

export default Skills;
