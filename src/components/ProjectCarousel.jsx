import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PROJECTS from "../data/projects";

const CarouselStyles = styled.div`
	.mySwiper {
		width: 100%;
		padding-bottom: 3rem;
	}

	.swiper-slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.card {
		width: min(100%, 900px);
		padding: 0.75rem;
		background-color: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.card img {
		display: block;
		width: 100%;
		object-fit: cover;
		border-radius: var(--radius-md);
	}

	.card__title {
		margin-top: 0.75rem;
		text-align: center;
	}

	.swiper-button-next,
	.swiper-button-prev {
		color: var(--text-secondary);
		transition: color var(--transition);
	}

	.swiper-button-next:hover,
	.swiper-button-prev:hover {
		color: var(--accent);
	}

	.swiper-button-next::after,
	.swiper-button-prev::after {
		font-size: 24px;
	}

	.swiper-pagination-bullet {
		background: var(--text-secondary);
	}

	.swiper-pagination-bullet-active {
		background: var(--accent);
	}

	@media only screen and (max-width: 768px) {
		.swiper-button-next,
		.swiper-button-prev {
			display: none;
		}
	}
`;

const ProjectCarousel = ({ mobile = false }) => (
	<CarouselStyles>
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			keyboard={{ enabled: true }}
			navigation={!mobile}
			pagination={{ clickable: true }}
			modules={[Keyboard, Navigation, Pagination]}
			className="mySwiper"
		>
			{PROJECTS.map((project) => (
				<SwiperSlide key={project.id}>
					<figure className="card">
						<img
							src={mobile ? project.mobileImage : project.image}
							alt={project.alt}
							loading="lazy"
						/>
						<figcaption className="card__title">
							<Typography variant="h6" component="h3">
								{project.title}
							</Typography>
						</figcaption>
					</figure>

					{project.href && (
						<Button
							href={project.href}
							target="_blank"
							rel="noreferrer"
							variant="contained"
							color="secondary"
							endIcon={<OpenInNewIcon />}
						>
							{project.linkLabel}
						</Button>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	</CarouselStyles>
);

export default ProjectCarousel;
