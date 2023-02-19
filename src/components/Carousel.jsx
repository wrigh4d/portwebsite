import React from "react";

// Import Images
import square1 from "../images/uwm.jpg";
import square2 from "../images/pollinate.jpg";
import square3 from "../images/buffbud.jpg";
import square4 from "../images/mage.jpg";
import square5 from "../images/taxi.jpg";
import square6 from "../images/mmd.jpg";
import square7 from "../images/projects.jpg";

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
import { Keyboard, Navigation } from "swiper";
import styled from "styled-components";
import { Button, Tooltip } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const CarouselStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.btn {
		margin: 10px;
		border-radius: 10px;
		font-size: 20px;
		width: 85%;
		max-width: 100%;
	}
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
					<Tooltip title="Swipe Through Projects">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							keyboard={{
								enabled: true,
							}}
							navigation={true}
							modules={[Keyboard, Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>
								<img src={square1} alt="" />
								<Button href="https://github.com/wrigh4d/UWMFlashcard" target="_blank" variant="contained" color="secondary" className="btn">
									Github
								</Button>
							</SwiperSlide>

							<SwiperSlide>
								<img src={square2} alt="" />
								<Button href="https://github.com/wrigh4d/PollingWebsite" target="_blank" variant="contained" color="secondary" className="btn">
									Github
								</Button>
							</SwiperSlide>

							<SwiperSlide>
								<img src={square3} alt="" />
								<Button href="https://github.com/wrigh4d/Buffbud" target="_blank" variant="contained" color="secondary" className="btn">
									Github
								</Button>
							</SwiperSlide>

							<SwiperSlide>
								<img src={square4} alt="" />
								<Button href="https://github.com/wrigh4d/MagiciansNightmare" target="_blank" variant="contained" color="secondary" className="btn">
									Github
								</Button>
							</SwiperSlide>

							<SwiperSlide>
								<img src={square5} alt="" />
								<Button href="https://github.com/wrigh4d/CrazyTaxi" target="_blank" variant="contained" color="secondary" className="btn">
									Github
								</Button>
							</SwiperSlide>

							<SwiperSlide>
								<img src={square6} alt="" />
								<Button href="https://github.com/wrigh4d/portwebsite" target="_blank" variant="contained" color="secondary" className="btn">
									Github
								</Button>
							</SwiperSlide>

							<SwiperSlide>
								<img src={square7} alt="" />
							</SwiperSlide>
						</Swiper>
					</Tooltip>
				</CarouselStyles>
			</ThemeProvider>
		</>
	);
};

export default Carousel;
