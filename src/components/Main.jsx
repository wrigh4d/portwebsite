import React from "react";

import headshot from "../images/headshot.webp";

import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";

const MainStyles = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 6rem var(--section-padding-x) 4rem;

	.headshot {
		width: min(260px, 70vw);
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 50%;
		border: 1px solid var(--border);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
	}

	.eyebrow {
		display: inline-block;
		margin-top: 2rem;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.role {
		margin: 0.5rem auto 0;
		max-width: 34ch;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 2rem;
	}
`;

const Main = () => {
	return (
		<MainStyles id="home">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<img src={headshot} alt="Portrait of Nick Wright" className="headshot" />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
			>
				<span className="eyebrow">Software Developer</span>
				<Typography variant="h1" component="h1">
					Nick Wright
				</Typography>
				<Typography variant="h5" component="p" className="role">
					Building automation and AI-assisted tooling at United Wholesale Mortgage.
				</Typography>
			</motion.div>

			<motion.div
				className="actions"
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
			>
				<Button variant="contained" color="primary" href="#contact">
					Contact me
				</Button>
				<Button variant="contained" color="secondary" href="#projects">
					View projects
				</Button>
			</motion.div>
		</MainStyles>
	);
};

export default Main;
