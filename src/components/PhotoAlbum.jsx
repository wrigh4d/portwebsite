import React from "react";

// Import Images
import square1 from "../images/about1.jpg";
import square2 from "../images/about2.jpg";
import square3 from "../images/about3.jpg";
import square4 from "../images/about4.jpg";
import square5 from "../images/about5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

// import required modules
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import styled from "styled-components";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const CarouselStyles = styled.div`
	.mySwiper {
		width: 100%;
		max-width: 100%;
	}
	.swiper-slide {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-text: center;
		background: transparent;
	}
	.swiper-slide img {
		cursor: pointer;
		display: block;
		object-fit: cover;
		width: 100%;
		max-width: 100%;
		border-radius: 10px;
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: #fff;
		transition: 0.3s ease-in-out;
	}
	.swiper-button-next:hover,
	.swiper-button-prev:hover {
		color: #000;
	}
	@media only screen and (max-width: 768px) {
		.swiper-slide img {
			width: 100%;
			max-width: 100%;
		}
	}
`;

const PhotoAlbum = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CarouselStyles>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src={square1} alt="" />
						</SwiperSlide>

						<SwiperSlide>
							<img src={square5} alt="" />
						</SwiperSlide>

						<SwiperSlide>
							<img src={square2} alt="" />
						</SwiperSlide>

						<SwiperSlide>
							<img src={square3} alt="" />
						</SwiperSlide>

						<SwiperSlide>
							<img src={square4} alt="" />
						</SwiperSlide>
					</Swiper>
				</CarouselStyles>
			</ThemeProvider>
		</>
	);
};

export default PhotoAlbum;
