import Email from "../SVGs/Email";

const Booking = () => {
	return (
		<div className="flex flex-col gap-5 items-center justify-center py-20">
			<h1 className="text-4xl md:text-6xl font-medium text-title-dark-green text-center w-11/12">
				Book your free initial assessment.
			</h1>
			<button
				type="button"
				className="focus:outline-none text-white bg-green-700 hover:bg-green-800 px-5 py-3 me-2 mt-5 flex items-center justify-center gap-2"
			>
				<span>Book Now</span>
				<Email />
			</button>
		</div>
	);
};

export default Booking;
