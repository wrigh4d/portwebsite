import React from "react";

// Import Components
import square from "../images/about.jpg";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { Typography } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 5rem 8rem;
	background-color: #2a2a2a;
	.header {
		padding: 2rem;
		text-align: center;
	}
	.about__info__heading {
		padding: 10px 0;
		font-size: 3.6rem;
	}
	.about__info__content {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
	.text {
		padding-right: 100px;
	}
	.about__image__container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.about__img {
		width: 100%;
		max-width: 500px;
		border-radius: 10px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	@media only screen and (max-width: 768px) {
		padding: 1rem 1rem;
		.text {
			padding: 10px;
		}
		.about__info__heading {
			font-size: 2.6rem;
		}
		.about__info__content {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.about__image__container {
			padding: 2rem 10px;
		}
		.about__img {
			width: 100%;
			max-width: 100%;
			
		}
	}
`;

const About = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<SkillsStyles id="about">
					<div className="container">
						<section className="about__info__items">
							<div className="header">
								<Typography variant="h1">ABOUT ME</Typography>
								<Typography variant="h5">-SUMMARY ABOUT ME-</Typography>
							</div>
							<div className="about__info__content">
								<Typography variant="h6" className="text">
									<Typography variant="h1" className="about__info__heading">
										BACKGROUND
									</Typography>
									I was born in Lansing, MI, with my two other sisters on
									February 11th, 2000. I am a triplet and child of four.
									Throughout my life I have lived in my different towns but we
									stayed in mid-Michigan.
									<Typography variant="h1" className="about__info__heading">
										COLLEGE
									</Typography>
									After graduating highschool I decided to attend Central
									Michigan University to be close to home and near my
									grandparents. My grandparents lived near campus and are alumni
									of the school. I was determined to get a bachelors in Computer
									Science after taking an AP class in high school that made me
									fall in love with programming and the creativity/problem
									solving aspects involved in it.
								</Typography>
								<div className="about__image__container">
									<img src={square} alt="" className="about__img" />
								</div>
							</div>
						</section>
					</div>
				</SkillsStyles>
			</ThemeProvider>
		</>
	);
};

export default About;
