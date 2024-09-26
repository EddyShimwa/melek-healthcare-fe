import useCompanyProfile from "../../hooks/useCompanyProfile";
import CopyElement from "../common/CopyToClipboard";
import Heading from "../common/Heading";

const Contact = () => {
	const { data } = useCompanyProfile();
	return (
		<div className="flex flex-col gap-5 items-center justify-center pb-20">
			<Heading title="CONTACT US" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center mt-10">
				{/* email card */}
				<div className="flex items-center justify-between gap-4 text-sm bg-gray-300 p-2 rounded-md w-full">
					<div className="ml-3">
						<strong>Email:</strong>
						<span className="ml-2">{data?.data.email}</span>
					</div>
					<CopyElement text={data?.data.email as string} />
				</div>
				{/* phone number card */}
				<div className="flex items-center justify-between gap-4 text-sm bg-gray-300 p-2 rounded-md w-full">
					<div className="ml-3">
						<strong>Tel:</strong>
						<span className="ml-2">{data?.data.phone_number}</span>
					</div>
					<CopyElement text={data?.data.phone_number as string} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
