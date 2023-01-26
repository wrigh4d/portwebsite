import React from "react";

// Import Components
import AboutInfoItem from "./AboutInfoItem";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import styled from "styled-components";
import { Typography } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 0 10rem;
	.about__info__items {
		margin-top: 10rem;
	}
	.about__info__item {
		margin-bottom: 8rem;
	}
	.about__info__heading {
		margin: 0;
		font-size: 3.6rem;
	}
	@media only screen and (max-width: 768px) {
		padding: 0 1rem;
		.about__info__heading {
			font-size: 3rem;
		}
	}
`;

const Skills = () => {
	return (
		<>
			<SkillsStyles>
				<div className="container">
					<section id="skills" className="about__info__items">
						<Typography
							variant="h1"
							style={{ textAlign: "center", paddingBottom: "2rem" }}
						>
							ABOUT ME
						</Typography>
						<div className="about__info__item">
							<h1 className="about__info__heading">EDUCATION</h1>
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
							<h1 className="about__info__heading">MY SKILLS</h1>
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
							<h1 className="about__info__heading">EXPERIENCE</h1>
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
				</div>
			</SkillsStyles>
		</>
	);
};

export default Skills;
