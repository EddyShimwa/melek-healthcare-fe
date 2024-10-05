import { useState } from "react";
import Dialog from "../common/Dialog";
import FormModal from "../common/FormModal";
import SuccessModal from "../common/SuccessModal";
import BookingForm from "../Form/BookingForm";
import Email from "../SVGs/Email";

const Booking = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	return (
		<>
			<Dialog
				isOpen={isDialogOpen}
				toggleIsOpen={() => setIsDialogOpen((curr) => !curr)}
				className="bg-black/70"
			>
				<FormModal title="Book Now" className="mt-10 md:mt-0">
					<BookingForm
						setIsSuccess={() => setIsSuccess(true)}
						toggleModal={() => setIsDialogOpen((curr) => !curr)}
					/>
				</FormModal>
			</Dialog>

			{/* success dialog */}
			<Dialog
				isOpen={isSuccess}
				toggleIsOpen={() => setIsSuccess((curr) => !curr)}
				className="bg-black/70"
			>
				<SuccessModal
					text="Booking successfully sent!"
					toggleModal={() => setIsSuccess((curr) => !curr)}
				/>
			</Dialog>
			<div className="flex flex-col gap-5 items-center justify-center py-20">
				<h1 className="text-4xl md:text-6xl font-medium text-title-dark-green text-center w-11/12">
					Book your free initial assessment.
				</h1>
				<button
					type="button"
					onClick={() => setIsDialogOpen((curr) => !curr)}
					className="focus:outline-none text-white bg-green-700 hover:bg-green-800 px-5 py-3 me-2 mt-5 flex items-center justify-center gap-2"
				>
					<span>Book Now</span>
					<Email />
				</button>
			</div>
		</>
	);
};

export default Booking;
