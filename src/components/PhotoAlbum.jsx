import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import about1 from "../images/about1.webp";
import about2 from "../images/about2.webp";
import about3 from "../images/about3.webp";
import about4 from "../images/about4.webp";

const PHOTOS = [
	{ src: about1, alt: "Family photo in Las Vegas" },
	{ src: about2, alt: "Sister's graduation at Michigan State University" },
	{ src: about3, alt: "Photo with friends" },
	{ src: about4, alt: "Family photo" }
];

const CarouselStyles = styled.div`
	min-width: 0;
	overflow: hidden;

	.mySwiper {
		width: 100%;
		max-width: 100%;
		padding-bottom: 2.5rem;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: var(--radius-lg);
		border: 1px solid var(--border);
	}

	.swiper-pagination-bullet {
		background: var(--text-secondary);
	}

	.swiper-pagination-bullet-active {
		background: var(--accent);
	}
`;

const PhotoAlbum = () => (
	<CarouselStyles>
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			loop
			autoplay={{ delay: 4000, disableOnInteraction: false }}
			pagination={{ clickable: true }}
			modules={[Autoplay, Pagination]}
			className="mySwiper"
		>
			{PHOTOS.map((photo) => (
				<SwiperSlide key={photo.src}>
					<img src={photo.src} alt={photo.alt} loading="lazy" />
				</SwiperSlide>
			))}
		</Swiper>
	</CarouselStyles>
);

export default PhotoAlbum;
