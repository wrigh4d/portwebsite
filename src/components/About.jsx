import React from "react";

// Import MUI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import PhotoAlbum from "./PhotoAlbum";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const SkillsStyles = styled.div`
	padding: 2.5rem 7rem;
	.header {
		padding: 1rem;
		text-align: center;
	}
	.about__info__heading {
		padding: 10px 0;
		font-size: 3.6rem;
	}
	.text__container {
		padding-right: 100px;
	}
	.about__info__content {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
	.carousel__container {
		width: 100%;
		max-width: 40%;
	}
	@media only screen and (max-width: 768px) {
		padding: 2.5rem 0;
		.about__info__heading {
			font-size: 2.6rem;
		}
		.about__info__content {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.text__container {
			padding: 0 2rem;
		}
		.carousel__container {
			padding-top: 50px;
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
						<Typography variant="h5">-SUMMARY ABOUT ME-</Typography>
					</div>
					<div className="about__info__content">
						<div className="text__container">
							<Typography variant="h1" className="about__info__heading">
								BACKGROUND
							</Typography>
							<Typography variant="h5">
								My name is Nick Wright, I am in my final semester of
								college at Central Michigan University studying Computer Science
								with a minor in Multimedia Design. I am a triplet and child of
								four who grew up in Mid-Michigan. I am a hard working individual
								who fell in love with programming because of the creativity and
								problem solving aspects involved. In my free time, I enjoy
								playing board games like Wingspan, Space Base, and Catan. I
								enjoy spending time with friends and family. I most enjoy going
								camping, traveling, and game nights. I thoroughly enjoy nature;
								I am very passionate about national parks. I have visited 22 of
								America{"’"}s national parks with my family and I dream to visit
								all of them one day. My favorite national park adventures thus
								far have been exploring the vast wilderness of Yellowstone,
								hiking Grand Teton{"’"}s beautiful trails, and most of all
								making memories with my family along the way.
							</Typography>
						</div>
						<div className="carousel__container">
							<Typography
								variant="h1"
								className="about__info__heading"
								sx={{ textAlign: "center" }}
							>
								PHOTO ALBUM
							</Typography>
							<PhotoAlbum />
						</div>
					</div>
				</SkillsStyles>
			</ThemeProvider>
		</>
	);
};

export default About;
