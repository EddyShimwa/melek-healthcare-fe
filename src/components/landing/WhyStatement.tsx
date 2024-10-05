import useCompanyProfile from "../../hooks/useCompanyProfile";
import { whyImage } from "../../utils/images";
import Heading from "../common/Heading";

const WhyStatement = () => {
	const { data, error } = useCompanyProfile();

	if (error) throw new Error(error.message);

	return (
		<div className="flex flex-col items-center justify-center py-20">
			<Heading title="OUR WHY STATEMENT" />
			<div className="w-4/5 h-max flex items-center mt-10">
				<img
					src={whyImage}
					alt="why image"
					className="h-full hidden lg:block"
				/>
				<div
					className="prose max-w-none text-sm"
					dangerouslySetInnerHTML={{
						__html: data?.data.why_statement as string,
					}}
				/>
			</div>
		</div>
	);
};

export default WhyStatement;
