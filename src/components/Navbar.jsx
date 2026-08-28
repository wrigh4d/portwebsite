import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tooltip } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FolderIcon from "@mui/icons-material/Folder";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

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

	svg {
		font-size: 22px;
	}
`;

const Navbar = () => {
	const [activeId, setActiveId] = useState("home");

	useEffect(() => {
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
	}, []);

	return (
		<NavStyles>
			<nav aria-label="Primary">
				<ul>
					{SECTIONS.map(({ id, label, Icon }) => (
						<li key={id}>
							<Tooltip title={label} enterDelay={400}>
								<a
									href={`#${id}`}
									aria-label={label}
									aria-current={activeId === id ? "true" : undefined}
									className={activeId === id ? "is-active" : ""}
								>
									<Icon />
								</a>
							</Tooltip>
						</li>
					))}
				</ul>
			</nav>
		</NavStyles>
	);
};

export default Navbar;
