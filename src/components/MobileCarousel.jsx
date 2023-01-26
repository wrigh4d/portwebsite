import React from "react";

// Import Images
import square1 from "../images/projects1mobile.jpg";
import square2 from "../images/projects1mobile.jpg";
import square3 from "../images/projects1mobile.jpg";
import square4 from "../images/projects1mobile.jpg";
import square5 from "../images/projects1mobile.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const MobileCarousel = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
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
