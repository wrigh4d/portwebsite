import React from "react";

// Import Images
import square1 from "../images/projects1mobile.jpg";
import square2 from "../images/projects2mobile.jpg";
import square3 from "../images/projects3mobile.jpg";
import square4 from "../images/projects4mobile.jpg";
import square5 from "../images/projects5mobile.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
	display: flex;
	justify-content: center;
	align-items: center;
	.mySwiper {
		width: 100%;
		max-width: 80%;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
	}
	.swiper-slide img {
		cursor: pointer;
		display: block;
		height: 100%;
		object-fit: cover;
		width: 100%;
		border-radius: 10px;
	}
`;

const MobileCarousel = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CarouselStyles>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						navigation={false}
						className="mySwiper"
					>
						<SwiperSlide>
							<img src={square1} alt="" />
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

						<SwiperSlide>
							<img src={square5} alt="" />
						</SwiperSlide>
					</Swiper>
				</CarouselStyles>
			</ThemeProvider>
		</>
	);
};

export default MobileCarousel;
