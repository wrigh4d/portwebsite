import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import NotFound from "./NotFound";
import { formatPostDate, getPostBySlug, getPosts } from "../data/posts";

const PostStyles = styled.article`
	padding: 7.5rem var(--section-padding-x) var(--section-padding-y);

	.inner {
		max-width: 720px;
		margin: 0 auto;
	}

	h1 {
		overflow-wrap: break-word;
	}

	.back {
		display: flex;
		width: fit-content;
		align-items: center;
		gap: 0.4rem;
		margin-bottom: 2rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color var(--transition);
	}

	.back:hover {
		color: var(--accent);
	}

	.back svg {
		font-size: 1.1rem;
	}

	.eyebrow {
		display: block;
		margin-bottom: 0.75rem;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.55rem;
		margin-top: 1rem;
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.dot {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: var(--text-secondary);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		list-style: none;
		margin-top: 1.25rem;
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

	.prose {
		margin-top: 2.5rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
	}

	.prose p,
	.prose li {
		color: var(--text-secondary);
		font-size: 1.125rem;
		line-height: 1.75;
	}

	.prose p + p {
		margin-top: 1.25rem;
	}

	.prose h2 {
		margin: 2.5rem 0 1rem;
		font-size: 1.45rem;
		font-weight: 700;
		letter-spacing: -0.015em;
		color: var(--text-primary);
	}

	.prose ul {
		margin: 1.15rem 0 0 1.2rem;
	}

	.prose li + li {
		margin-top: 0.55rem;
	}

	.more {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
	}

	.more h2 {
		margin-bottom: 1.25rem;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--text-secondary);
	}

	.more-list {
		display: grid;
		gap: 0.85rem;
	}

	.more-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1.15rem;
		text-decoration: none;
		color: inherit;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		transition: border-color var(--transition), color var(--transition);
	}

	.more-link:hover {
		border-color: var(--accent);
	}

	.more-link:hover .more-title {
		color: var(--accent);
	}

	.more-title {
		font-weight: 600;
		transition: color var(--transition);
	}

	.more-meta {
		display: block;
		margin-top: 0.25rem;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.more-link svg {
		flex-shrink: 0;
		color: var(--accent);
		font-size: 1.1rem;
	}
`;

const PostBody = ({ content }) => (
	<div className="prose">
		{content.map((block, index) => {
			if (block.type === "h2") {
				return (
					<Typography key={index} variant="h2" component="h2">
						{block.text}
					</Typography>
				);
			}

			if (block.type === "ul") {
				return (
					<ul key={index}>
						{block.items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				);
			}

			return <p key={index}>{block.text}</p>;
		})}
	</div>
);

const BlogPost = () => {
	const { slug } = useParams();
	const post = getPostBySlug(slug);
	const others = getPosts()
		.filter((entry) => entry.slug !== slug)
		.slice(0, 2);

	useEffect(() => {
		if (post) {
			document.title = `${post.title} - Nick Wright`;
		}
	}, [post]);

	if (!post) {
		return <NotFound />;
	}

	return (
		<PostStyles>
			<motion.div
				className="inner"
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.45, ease: "easeOut" }}
			>
				<Link to="/blog" className="back">
					<ArrowBackIcon />
					All posts
				</Link>

				<span className="eyebrow">{post.category}</span>
				<Typography variant="h1" component="h1" sx={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
					{post.title}
				</Typography>

				<div className="meta">
					<time dateTime={post.date}>{formatPostDate(post.date)}</time>
					<span className="dot" aria-hidden="true" />
					<span>{post.readingTime}</span>
				</div>

				<ul className="tags">
					{post.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>

				<PostBody content={post.content} />

				{others.length > 0 && (
					<nav className="more" aria-label="More posts">
						<h2>More writing</h2>
						<div className="more-list">
							{others.map((entry) => (
								<Link key={entry.slug} to={`/blog/${entry.slug}`} className="more-link">
									<span>
										<span className="more-title">{entry.title}</span>
										<span className="more-meta">
											{formatPostDate(entry.date)} · {entry.readingTime}
										</span>
									</span>
									<ArrowForwardIcon />
								</Link>
							))}
						</div>
					</nav>
				)}
			</motion.div>
		</PostStyles>
	);
};

export default BlogPost;
