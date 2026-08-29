import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderIcon from "@mui/icons-material/Folder";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";

const SECTIONS = [
	{ id: "home", label: "Home", Icon: HomeIcon },
	{ id: "about", label: "About", Icon: AccountBoxIcon },
	{ id: "projects", label: "Projects", Icon: FolderIcon },
	{ id: "skills", label: "Skills & Experience", Icon: WorkIcon },
	{ id: "contact", label: "Contact", Icon: EmailIcon },
];

const NavStyles = styled.div`
	nav {
		position: fixed;
		top: 1rem;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		z-index: 100;
		pointer-events: none;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.4rem;
		list-style: none;
		pointer-events: auto;
		background-color: rgba(20, 23, 28, 0.85);
		backdrop-filter: blur(12px);
		border: 1px solid var(--border);
		border-radius: 999px;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 999px;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color var(--transition), background-color var(--transition);
	}

	a:hover {
		color: var(--text-primary);
		background-color: var(--surface-raised);
	}

	a.is-active {
		color: var(--accent);
		background-color: rgba(122, 162, 247, 0.12);
	}

	.nav-divider {
		width: 1px;
		height: 1.5rem;
		margin: 0 0.4rem;
		padding: 0;
		background-color: var(--text-secondary);
		opacity: 0.35;
		align-self: center;
		pointer-events: none;
	}

	svg {
		font-size: 22px;
	}

	@media only screen and (max-width: 420px) {
		ul {
			gap: 0.1rem;
			padding: 0.3rem;
		}

		a {
			width: 38px;
			height: 38px;
		}

		.nav-divider {
			margin: 0 0.25rem;
		}

		svg {
			font-size: 20px;
		}
	}
`;

const Navbar = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const isBlog = location.pathname.startsWith("/blog");
	const [activeId, setActiveId] = useState(isHome ? "home" : null);

	useEffect(() => {
		if (!isHome) {
			setActiveId(null);
			return undefined;
		}

		const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
			Boolean
		);

		if (elements.length === 0) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible) setActiveId(visible.target.id);
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
		);

		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, [isHome]);

	const handleSectionClick = (id) => (event) => {
		if (location.pathname !== "/") return;

		event.preventDefault();
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		document.getElementById(id)?.scrollIntoView({
			behavior: reduceMotion ? "auto" : "smooth",
		});
		window.history.replaceState(
			null,
			"",
			`${process.env.PUBLIC_URL || ""}/#${id}`
		);
		setActiveId(id);
	};

	return (
		<NavStyles>
			<nav aria-label="Primary">
				<ul>
					{SECTIONS.map(({ id, label, Icon }) => (
						<li key={id}>
							<Tooltip title={label} enterDelay={400}>
								<Link
									to={`/#${id}`}
									aria-label={label}
									aria-current={activeId === id ? "true" : undefined}
									className={activeId === id ? "is-active" : ""}
									onClick={handleSectionClick(id)}
								>
									<Icon />
								</Link>
							</Tooltip>
						</li>
					))}

					<li className="nav-divider" role="separator" aria-hidden="true" />

					<li>
						<Tooltip title="Blog" enterDelay={400}>
							<Link
								to="/blog"
								aria-label="Blog"
								aria-current={isBlog ? "page" : undefined}
								className={isBlog ? "is-active" : ""}
							>
								<ArticleIcon />
							</Link>
						</Tooltip>
					</li>
				</ul>
			</nav>
		</NavStyles>
	);
};

export default Navbar;
