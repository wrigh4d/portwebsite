import React from "react";

// Import Components
import AboutInfoItem from "./AboutInfoItem";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 2.5rem 7rem;
	.header {
		padding: 1rem;
		text-align: center;
	}
	.about__info__item {
		margin-bottom: 4rem;
	}
	.about__info__heading {
		margin: 0;
		font-size: 3.6rem;
	}
	.about__info__content {
		display: flex;
		justify-content: space-between;
	}
	@media only screen and (max-width: 768px) {
		padding: 2.5rem 0;
		.about__info__item {
			padding: 0 2rem;
			margin-bottom: 2rem;
		}
		.about__info__heading {
			font-size: 2.2rem;
		}
		.about__info__content {
			display: flex;
			justify-content: center;
		}
	}
`;

const Skills = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<SkillsStyles id="skills">
					<section className="about__info__items">
						<div className="header">
							<Typography variant="h1">SKILLS & EXPERIENCE</Typography>
							<Typography variant="h5">-SCROLL THROUGH MY INFO-</Typography>
						</div>

						<div className="about__info__item">
							<Typography variant="h6" className="about__info__heading">
								EDUCATION
							</Typography>

							<AboutInfoItem
								title="SCHOOL"
								items={["Mason High School, Mason MI"]}
							/>

							<AboutInfoItem
								title="COLLEGE"
								items={["Central Michigan University, Mount Pleasant MI"]}
							/>
						</div>

						<div className="about__info__item">
							<Typography variant="h6" className="about__info__heading">
								RELEVANT COURSES
							</Typography>

							<AboutInfoItem
								title="CPS CLASSES"
								items={[
									"CPS 180 - Principles of Computer Programming",
									"CPS 181 - Introduction to Data Structures",
									"CPS 210 - Computer Organization and Communications",
									"CPS 240 - Object-Oriented Programming, Analysis and Design",
									"CPS 282 - Intro to Multimedia Design",
									"CPS 340 - Advanced Data Structures and Algorithms",
									"CPS 360 - Computer Design & Architecture",
									"CPS 382 - Advanced Multimedia Design",
									"CPS 395 - Internship in Computer Science",
									"CPS 410 - Senior Design I",
									"CPS 450 - Programming Language Concepts",
									"CPS 470 - Introduction to Operating Systems",
									"CPS 498 - Senior Design II",
								]}
							/>
						</div>

						<div className="about__info__item">
							<AboutInfoItem
								title="ITC CLASSES"
								items={[
									"ITC 190 - Computer Hardware/Concepts/Install",
									"ITC 320 - Web App Development - Client-Side Script",
									"ITC 341 - Intro to Databases and Applications",
									"ITC 383 - Video Game Design",
								]}
							/>
						</div>
						<div className="about__info__item">
							<AboutInfoItem
								title="MMD CLASSES"
								items={[
									"ART 231 - Introduction to Graphic Design",
									"BCA 223 - Video Production",
									"JRN 220 - Basic Media Photography",
									"MMD 495 - Multimedia Design Capstone",
									"ART 235 - Logo and Identity Design",
								]}
							/>
						</div>
						<div className="about__info__item">
							<Typography variant="h6" className="about__info__heading">
								MY SKILLS
							</Typography>

							<AboutInfoItem
								title="FRONTEND"
								items={["HTML", "CSS", "JS", "REACT"]}
							/>
							<AboutInfoItem
								title="BACKEND"
								items={["JAVA", "C#", "SQL", "C PROGRAMMING", "ASSEMBLY"]}
							/>
							<AboutInfoItem
								title="OTHER"
								items={["UNITY", "PHOTOSHOP", "ILLUSTRATOR", "INDESIGN"]}
							/>
						</div>
						<div className="about__info__item">
							<Typography variant="h6" className="about__info__heading">
								EXPERIENCE
							</Typography>

							<AboutInfoItem
								title="2021 - NOW"
								items={[
									"RESEARCH LIBRARIAN ASSISTANT AT CENTRAL MICHIGAN UNIVERSITY",
								]}
							/>
							<AboutInfoItem
								title="2022 - 2022"
								items={[
									"SOFTWARE DEVELOPER INTERN AT UNITED WHOLESALE MORTGAGE",
								]}
							/>
							<AboutInfoItem
								title="2018 - 2019"
								items={["KID'S CAMP COUNSELOR AT YMCA OF LANSING"]}
							/>
						</div>
					</section>
				</SkillsStyles>
			</ThemeProvider>
		</>
	);
};

export default Skills;
