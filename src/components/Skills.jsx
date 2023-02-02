import React from "react";

// Import Components
import AboutInfoItem from "./AboutInfoItem";
import square from "../images/headshot.jpg";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { Typography } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 5rem 8rem;
	.header {
		padding: 2rem;
		text-align: center;
	}
	.about__info__item {
		margin-bottom: 8rem;
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
		padding: 1rem 1rem;
		.about__info__item {
			margin-bottom: 2.5rem;
		}
		.about__info__heading {
			font-size: 2.6rem;
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
