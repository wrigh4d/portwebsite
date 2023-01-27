import React from "react";

// Import Images
import square1 from "../images/projects1.jpg";
import square2 from "../images/projects2.jpg";
import square3 from "../images/projects3.jpg";
import square4 from "../images/projects4.jpg";
import square5 from "../images/projects5.jpg";

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
import { Keyboard, Pagination, Navigation } from "swiper";
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
		max-width: 85%;
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
`;

const Carousel = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CarouselStyles>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						keyboard={{
							enabled: true,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Keyboard, Pagination, Navigation]}
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

export default Carousel;
