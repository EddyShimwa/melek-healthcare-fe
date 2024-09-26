import { useRef } from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useOffers from "../../hooks/useOffers";
import { offerCardBackground } from "../../utils/images";
import Heading from "../common/Heading";
import LeftArrow from "../SVGs/LeftArrow";
import RightArrow from "../SVGs/RightArrow";

import "swiper/css";
import "swiper/css/navigation";
import Loader from "../common/Loader";

const Offers = () => {
	const { data, error, isLoading } = useOffers();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const swiperRef = useRef<any>(null);

	if (error) throw new Error(error.message);

	if (isLoading) return <Loader />;

	return (
		<div
			id="what_We_Offer"
			className="flex flex-col items-center justify-center py-20"
		>
			<Heading title="WHAT WE OFFER" />
			<div className="relative w-full h-full mt-14">
				<Swiper
					modules={[Navigation, A11y]}
					loop={true}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
					className="swiper-custom-class select-none w-4/5 relative mx-auto"
				>
					{data?.data.map((offer) => (
						<SwiperSlide key={offer.id}>
							<div className="relative w-4/5 md:w-full mx-auto h-96 rounded-xl overflow-hidden">
								<img
									src={offerCardBackground}
									alt="offer card background"
									className="absolute inset-0 w-full h-full -z-10 object-cover"
								/>
								<div className="w-full h-full bg-black/10 absolute inset-0 z-20" />
								<div className="z-30 p-4 md:p-7">
									<h2 className="text-lg font-semibold">{offer.title}</h2>
									<div className="p-1 md:p-3 text-sm">
										{offer.contents.map((content) => (
											<div className="mt-4" key={content.id}>
												<h3 className="font-medium">{content.title}:</h3>
												<p className="text-xs mt-1">{content.content}</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Custom Navigation Buttons */}
				<button
					className="absolute left-3 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center"
					onClick={() => swiperRef.current?.slidePrev()}
				>
					<LeftArrow />
				</button>
				<button
					className="absolute right-3 md:right-10 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center"
					onClick={() => swiperRef.current?.slideNext()}
				>
					<RightArrow />
				</button>
			</div>
		</div>
	);
};

export default Offers;
