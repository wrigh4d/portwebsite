import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";

const NotFoundStyles = styled.section`
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 8rem var(--section-padding-x) 4rem;

	.eyebrow {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.lede {
		margin-top: 0.75rem;
		max-width: 36ch;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 2rem;
	}
`;

const NotFound = () => {
	useEffect(() => {
		document.title = "Page not found - Nick Wright";
	}, []);

	return (
		<NotFoundStyles>
			<span className="eyebrow">404</span>
			<Typography variant="h1" component="h1">
				Page not found
			</Typography>
			<Typography variant="h5" component="p" className="lede">
				That URL is not on this site. Head home or browse the notebook.
			</Typography>
			<div className="actions">
				<Button variant="contained" color="primary" component={Link} to="/">
					Back home
				</Button>
				<Button variant="contained" color="secondary" component={Link} to="/blog">
					View blog
				</Button>
			</div>
		</NotFoundStyles>
	);
};

export default NotFound;
