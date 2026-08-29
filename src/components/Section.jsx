import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const SectionStyles = styled.section`
	padding: var(--section-padding-y) var(--section-padding-x);

	.section__inner {
		max-width: var(--max-width);
		width: 100%;
		min-width: 0;
		margin: 0 auto;
	}

	.section__header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section__eyebrow {
		display: inline-block;
		margin-bottom: 0.75rem;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.section__subtitle {
		margin-top: 0.75rem;
		max-width: min(60ch, 100%);
		margin-inline: auto;
		overflow-wrap: break-word;
	}
`;

/**
 * Shared page section wrapper so every section uses the same rhythm,
 * max width and heading treatment.
 */
const Section = ({ id, eyebrow, title, subtitle, children, className }) => (
	<SectionStyles id={id} className={className}>
		<div className="section__inner">
			{(eyebrow || title || subtitle) && (
				<header className="section__header">
					{eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
					{title && (
						<Typography variant="h2" component="h2">
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography variant="h5" component="p" className="section__subtitle">
							{subtitle}
						</Typography>
					)}
				</header>
			)}
			{children}
		</div>
	</SectionStyles>
);

export default Section;
