import React from "react";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import PhotoAlbum from "./PhotoAlbum";
import pdf from "../images/resume.pdf";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 2.5rem 12rem;
	.container {
		display: flex;
		flex-direction: row;
	}
	.header {
		padding: 1rem;
		text-align: center;
	}
	.text__container {
		padding: 0 50px;
	}
	.about__info__content {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.carousel__container {
		width: 100%;
		max-width: 40%;
	}

	@media only screen and (max-width: 768px) {
		padding: 2.5rem 2rem;
		.container {
			display: flex;
			flex-direction: column;
		}
		.text__container {
			padding: 0;
		}
		.about__info__content {
			padding: 1rem 0;
		}
		.carousel__container {
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
					<div className="header">
						<Typography variant="h1">ABOUT ME</Typography>
					</div>
					<div className="container">
						<div className="carousel__container">
							<PhotoAlbum />
						</div>

						<div className="about__info__content">
							<div className="text__container">
								{/* <Typography variant="h2">ABOUT</Typography> */}
								<Typography variant="h5">
									My name is Nick Wright, I am in my final semester of college
									at Central Michigan University studying Computer Science with
									a minor in Multimedia Design.
								</Typography>
								<br />
								<Typography variant="h5">
									I am a triplet and child of four who grew up in Mid-Michigan.
									I am a hard working individual who fell in love with
									programming in highschool because of my AP Computer Science
									teacher Mr. Kato.
								</Typography>
								<br />
								<Typography variant="h5">
									In my free time, I enjoy playing board games like Wingspan,
									Space Base, and Catan. I enjoy spending time with friends and
									family. I also, thoroughly enjoy nature. I have visited over
									20 of America{"’"}s national parks with my family and I dream
									to visit all of them one day.
								</Typography>
								<br />

								<Button
									variant="contained"
									color="secondary"
									href={pdf}
									rel="noreferrer"
									target="_blank"
									sx={{ width: "100%", maxWidth: "100%", fontSize: "18px" }}
								>
									RESUME
								</Button>
							</div>
						</div>
					</div>
				</SkillsStyles>
			</ThemeProvider>
		</>
	);
};

export default About;
