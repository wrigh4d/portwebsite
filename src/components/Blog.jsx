import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Section from "./Section";
import { formatPostDate, getPosts } from "../data/posts";

const PageStyles = styled.div`
	padding-top: 3.25rem;
`;

const GridStyles = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	gap: 1.25rem;

	@media only screen and (min-width: 768px) {
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1.5rem;
	}
`;

const CardStyles = styled(motion(Link))`
	display: flex;
	flex-direction: column;
	min-width: 0;
	height: 100%;
	padding: 1.5rem 1.5rem 1.35rem;
	text-decoration: none;
	color: inherit;
	background-color: var(--surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-lg);
	transition: border-color var(--transition), transform var(--transition),
		box-shadow var(--transition);

	&:hover {
		border-color: var(--accent);
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
	}

	&:hover .read {
		color: var(--accent-hover);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-secondary);
	}

	.kind {
		padding: 0.2rem 0.6rem;
		letter-spacing: 0.14em;
		color: var(--text-primary);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 999px;
	}

	.dot {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: var(--text-secondary);
	}

	.title {
		margin-top: 1rem;
		overflow-wrap: break-word;
	}

	.excerpt {
		margin-top: 0.75rem;
		color: var(--text-secondary);
		line-height: 1.65;
		flex: 1;
		overflow-wrap: break-word;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		list-style: none;
		margin-top: 1.1rem;
		padding: 0;
	}

	.tags li {
		padding: 0.28rem 0.65rem;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--text-secondary);
		background: var(--surface-raised);
		border: 1px solid var(--border);
		border-radius: 999px;
	}

	.read {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		margin-top: 1.25rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--accent);
		transition: color var(--transition);
	}

	.read svg {
		font-size: 1rem;
	}

	&.is-featured {
		grid-column: 1 / -1;
	}
`;

const Blog = () => {
	const posts = getPosts();

	useEffect(() => {
		document.title = "Blog - Nick Wright";
	}, []);

	return (
		<PageStyles>
			<Section
				id="blog"
				eyebrow="Notebook"
				title="Blog"
				subtitle="Longer write-ups that do not fit on a project card."
			>
				<GridStyles>
					{posts.map((post, index) => (
						<CardStyles
							key={post.slug}
							to={`/blog/${post.slug}`}
							className={index === 0 ? "is-featured" : undefined}
							aria-labelledby={`${post.slug}-title`}
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45, ease: "easeOut" }}
						>
							<div className="meta">
								<span className="kind">{post.category}</span>
								<span className="dot" aria-hidden="true" />
								<time dateTime={post.date}>{formatPostDate(post.date)}</time>
								<span className="dot" aria-hidden="true" />
								<span>{post.readingTime}</span>
							</div>

							<Typography
								variant="h3"
								component="h2"
								id={`${post.slug}-title`}
								className="title"
								sx={{ fontSize: "1.45rem" }}
							>
								{post.title}
							</Typography>

							<p className="excerpt">{post.excerpt}</p>

							<ul className="tags">
								{post.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>

							<span className="read">
								Read post
								<ArrowForwardIcon />
							</span>
						</CardStyles>
					))}
				</GridStyles>
			</Section>
		</PageStyles>
	);
};

export default Blog;
