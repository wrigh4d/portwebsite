import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import about1 from "../images/about1.webp";
import about2 from "../images/about2.webp";
import about3 from "../images/about3.webp";
import about4 from "../images/about4.webp";
import about5 from "../images/about5.webp";

const PHOTOS = [
	{ src: about1, alt: "Nick Wright travelling in a national park" },
	{ src: about5, alt: "Nick Wright outdoors on a hike" },
	{ src: about2, alt: "Nick Wright with friends" },
	{ src: about3, alt: "A landscape photograph taken by Nick Wright" },
	{ src: about4, alt: "Nick Wright exploring a new city" },
];

const CarouselStyles = styled.div`
	.mySwiper {
		width: 100%;
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
