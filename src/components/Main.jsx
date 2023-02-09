import React from "react";

// Imports Images
import square from "../images/headshot.jpg";
import pdf from "../images/resume.pdf";

// Imports Libraries
import { Button, ButtonGroup, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";
import { motion } from "framer-motion";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const MainStyles = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	.header {
		padding: 1rem;
	}
	.headshot {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 100%;
		max-width: 300px;
		width: 90%;
		align-items: center;
	}
	.text {
		padding: 1.5rem;
	}
	@media only screen and (max-width: 768px) {
		height: calc(100vh - 56px);
		padding: 0;
	}
`;

const Main = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<MainStyles id="home">
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								default: {
									duration: 0.3,
									ease: [0, 0.71, 0.2, 1.01],
								},
								scale: {
									type: "spring",
									damping: 5,
									stiffness: 100,
									restDelta: 0.001,
								},
							}}
						>
							<img src={square} alt="" className="headshot" />
						</motion.div>
						<motion.div
							className="header"
							initial={{ x: "-100vw" }}
							animate={{ x: 0 }}
							transition={{ type: "spring", duration: 1, bounce: 0.3 }}
						>
							<Typography variant="h1">Nick Wright</Typography>
							<Typography variant="h5">
								-COMPUTER SCIENCE GRADUATE FROM CENTRAL MICHIGAN UNIVERSITY-
							</Typography>
						</motion.div>
						<motion.div
							initial={{ x: "100vw" }}
							animate={{ x: 0 }}
							transition={{ type: "spring", duration: 1, bounce: 0.3 }}
						>
							<ButtonGroup variant="text" aria-label="text button group">
								<Button
									variant="contained"
									type="submit"
									href="#contact"
									sx={{ backgroundColor: "black" }}
								>
									Contact Me
								</Button>
								<Button
									variant="contained"
									href={pdf}
									download
									sx={{ backgroundColor: "black" }}
								>
									Download Resume
								</Button>
							</ButtonGroup>
						</motion.div>
					</div>
				</MainStyles>
			</ThemeProvider>
		</>
	);
};

export default Main;
