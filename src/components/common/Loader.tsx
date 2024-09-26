import { BarLoader, RingLoader } from "react-spinners";

const Loader = () => {
	return (
		<div className="w-screen h-screen bg-white fixed inset-0 z-[5000] flex flex-col gap-5 items-center justify-center">
			<RingLoader color="#05732F" />
			<BarLoader color="#05732F" />
			<div className="text-xs animate-pulse">Loading...</div>
		</div>
	);
};

export default Loader;
