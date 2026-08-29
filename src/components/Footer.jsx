import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import resume from "../images/resume.pdf";

const SOCIALS = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/nick-wright12/",
		Icon: LinkedInIcon,
	},
	{
		label: "GitHub",
		href: "https://github.com/wrigh4d",
		Icon: GitHubIcon,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/nick.wright.00/",
		Icon: InstagramIcon,
	},
];

const FooterStyles = styled.footer`
	margin-top: 4rem;
	padding: 3.5rem var(--section-padding-x) 2rem;
	background-color: var(--surface);
	border-top: 1px solid var(--border);

	.footer__inner {
		max-width: var(--max-width);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
		gap: 2rem;
	}

	h3 {
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--text-secondary);
		margin-bottom: 1rem;
	}

	.col a {
		display: block;
		width: fit-content;
		padding: 0.3rem 0;
		color: var(--text-primary);
		text-decoration: none;
		transition: color var(--transition);
	}

	.col a:hover {
		color: var(--accent);
	}

	.col .nav-divider {
		width: 2rem;
		height: 1px;
		margin: 0.65rem 0;
		background-color: var(--border);
	}

	.socials {
		display: flex;
		gap: 0.5rem;
	}

	.socials a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		color: var(--text-secondary);
		transition: color var(--transition), border-color var(--transition);
	}

	.socials a:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	.footer__bottom {
		max-width: var(--max-width);
		margin: 2.5rem auto 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
		text-align: center;
	}
`;

const Footer = () => (
	<FooterStyles>
		<div className="footer__inner">
			<div className="col">
				<h3>Navigate</h3>
				<Link to="/#home">Home</Link>
				<Link to="/#about">About</Link>
				<Link to="/#projects">Projects</Link>
				<Link to="/#skills">Skills &amp; experience</Link>
				<Link to="/#contact">Contact</Link>
				<div className="nav-divider" role="separator" aria-hidden="true" />
				<Link to="/blog">Blog</Link>
			</div>

			<div className="col">
				<h3>Links</h3>
				<a href={resume} target="_blank" rel="noreferrer">
					Download résumé
				</a>
				<a href="mailto:wrigh4d@cmich.edu">wrigh4d@cmich.edu</a>
			</div>

			<div className="col">
				<h3>Elsewhere</h3>
				<div className="socials">
					{SOCIALS.map(({ label, href, Icon }) => (
						<a
							key={href}
							href={href}
							target="_blank"
							rel="noreferrer"
							aria-label={label}
						>
							<Icon />
						</a>
					))}
				</div>
			</div>
		</div>

		<div className="footer__bottom">
			<Typography variant="body2" color="text.secondary">
				© {new Date().getFullYear()} Nick Wright
			</Typography>
		</div>
	</FooterStyles>
);

export default Footer;
