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
									Hi, I{"’"}m Nick Wright💻 — a computer science graduate and passionate 
									programmer who strives to create innovative and efficient solutions. 
									I currently work at United Wholesale Mortgage, the nation’s #1 mortgage 
									company, where I design and implement innovative solutions to automate 
									the mortgage underwriting process, including utilizing AI for tasks 
									such as bank statement analysis and data extraction.
								</Typography>
								<br />
								<Typography variant="h5">
									My role involves working within a robust codebase powered by ASP.NET 
									microservices, where I focus on building scalable, performant, and 
									user-friendly solutions that streamline operations and enhance engagement. 
									Every day, I strive to write code that is not only effective but also 
									maintainable and readable for future development.
								</Typography>
								<br />
								<Typography variant="h5">
									Outside of work, I{"’"}m passionate about travel and have set a personal 
									goal to visit all 63 national parks. I am also an enthusiastic board 
									game player, and an amateur photographer. Additionally, I love working 
									on side projects that challenge my creativity and technical skills.
								</Typography>
								<br />
								<Typography variant="h5">
									I{"’"}m driven by the opportunity to innovate, solve complex problems, 
									and collaborate with talented individuals who share a vision for creating 
									impactful technology.
								</Typography>
								<br />
								<Typography variant="h5">
									Let{"’"}s connect and discuss how we can work together to build something 
									extraordinary!
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
