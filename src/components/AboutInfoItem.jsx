import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const AboutItemStyles = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
	gap: 1.5rem;
	padding: 1.25rem 0;
	border-top: 1px solid var(--border);

	.title {
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-secondary);
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.item {
		padding: 0.45rem 0.85rem;
		font-size: 0.95rem;
		background-color: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
	}

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0.75rem;
	}
`;

export default function AboutInfoItem({ title = "", items = [] }) {
	return (
		<AboutItemStyles>
			<Typography component="h4" className="title">
				{title}
			</Typography>
			<ul className="items">
				{items.map((item) => (
					<li className="item" key={item}>
						{item}
					</li>
				))}
			</ul>
		</AboutItemStyles>
	);
}
