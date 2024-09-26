import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useMilestones from "../../hooks/useMilestones";
import { milestoneCircle } from "../../utils/images";
import Heading from "../common/Heading";

import "swiper/css";
import "swiper/css/navigation";
import Loader from "../common/Loader";

const Milestone = () => {
	const { data, isLoading, error } = useMilestones();

	if (error) throw new Error(error.message);

	if (isLoading) return <Loader />;

	return (
		<div className="flex flex-col items-center justify-center py-20">
			<Heading title="OUR MILESTONES" />
			<div className="w-11/12 mx-auto mt-20">
				<Swiper
					modules={[Navigation, A11y]}
					spaceBetween={50}
					loop={true}
					navigation
					breakpoints={{
						// when window width is >= 640px (mobile)
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						// when window width is >= 768px (tablet)
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						// when window width is >= 1024px (desktop)
						1024: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					className="swiper-custom select-none"
				>
					{data?.data.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="flex flex-col items-center justify-center">
								<img src={milestoneCircle} alt="milestone circle" />
								<h3 className="text-3xl font-semibold my-5">{item.year}</h3>
								<p className="text-sm text-center px-7">{item.description}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Milestone;
