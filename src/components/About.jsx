import React from "react";

// Import Components
import square from "../images/headshot.jpg";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { Typography } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 4rem 10rem;
	.header {
		padding: 2rem;
		text-align: center;
	}
	.about__info__heading {
		margin: 0;
		font-size: 3.6rem;
	}
	.about__info__content {
		display: flex;
		justify-content: space-between;
	}
	.about__img {
		width: 100%;
		max-width: 400px;
		border-radius: 10px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	@media only screen and (max-width: 768px) {
		padding: 0 1rem;
		.about__info__heading {
			font-size: 3rem;
		}
		.about__info__content {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
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
				<SkillsStyles>
					<div id="about" className="container">
						<section id="about" className="about__info__items">
							<div className="header">
								<Typography variant="h1">ABOUT ME</Typography>
								<Typography variant="h5">-SUMMARY ABOUT ME-</Typography>
							</div>

							<div className="about__info__content">
								<Typography variant="h6">
									<h1 className="about__info__heading">BACKGROUND</h1>
									My name is Nick Wright, an aspiring software developer who
									grew up in mid-Michigan. I am a child of 4 and a triplet!
									<h1 className="about__info__heading">BACKGROUND</h1>
									My name is Nick Wright, an aspiring software developer who
									grew up in mid-Michigan. I am a child of 4 and a triplet!
									<h1 className="about__info__heading">BACKGROUND</h1>
									My name is Nick Wright, an aspiring software developer who
									grew up in mid-Michigan. I am a child of 4 and a triplet!
								</Typography>

								<img src={square} alt="" className="about__img" />
							</div>
						</section>
					</div>
				</SkillsStyles>
			</ThemeProvider>
		</>
	);
};

export default About;
