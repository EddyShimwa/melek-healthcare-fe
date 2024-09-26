import { useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useCompanyProfile from "../../hooks/useCompanyProfile";
import Heading from "../common/Heading";

import "swiper/css";
import "swiper/css/navigation";
import useValues from "../../hooks/useValue";
import Loader from "../common/Loader";

const Values = () => {
	const { data } = useCompanyProfile();
	const { data: values, error, isLoading } = useValues();
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			const handleVideoEnd = () => {
				video.currentTime = 0;
				video.play();
			};

			video.addEventListener("ended", handleVideoEnd);

			return () => {
				video.removeEventListener("ended", handleVideoEnd);
			};
		}
	}, [data]);

	if (error) throw new Error(error.message);

	if (isLoading) return <Loader />;

	return (
		<div id="values" className="min-h-[80vh] w-screen relative mt-20">
			<div className="absolute w-full h-full inset-0">
				<video
					ref={videoRef}
					src={data?.data.video_url}
					muted
					autoPlay
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-full h-full absolute inset-0 z-10 text-white bg-black/80 flex flex-col items-center justify-start pt-20">
				<Heading title="OUR VALUE" color="white" />
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="swiper-custom select-none w-full flex items-center justify-center mt-5 md:mt-10"
				>
					{values?.data.map((value) => (
						<SwiperSlide key={value.id} className="box-border w-full h-full">
							<div className=" mx-auto w-4/5 h-full flex items-center justify-center">
								<div className="w-[65%] md:w-[70%] lg:w-[60%]">
									<div className="mt-20">
										<h3 className="text-3xl font-medium mb-1">{value.title}</h3>
										<div className="w-1/2 p-0.5 bg-white mb-5" />
										<p className="text-sm">{value.description}</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Values;
