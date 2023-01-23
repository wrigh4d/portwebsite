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
import { Keyboard, Pagination, Navigation } from "swiper";

const Carousel = () => {
	return (
		<>
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
					<img
						src={square1}
                        alt=""
						style={{
							width: "100%",
                            borderRadius: "10px",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={square2}
                        alt=""
						style={{
							width: "100%",
                            borderRadius: "10px",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={square3}
                        alt=""
						style={{
							width: "100%",
                            borderRadius: "10px",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={square4}
                        alt=""
						style={{
							width: "100%",
                            borderRadius: "10px",
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={square5}
                        alt=""
						style={{
							width: "100%",
                            borderRadius: "10px",
						}}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Carousel;
