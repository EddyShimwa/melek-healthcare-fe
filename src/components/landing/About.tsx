import useCompanyProfile from "../../hooks/useCompanyProfile";
import Heading from "../common/Heading";
import CloseQuote from "../SVGs/CloseQuote";
import OpenQuote from "../SVGs/OpenQuote";

const About = () => {
	const { data, error } = useCompanyProfile();

	if (error) throw new Error(error.message);

	return (
		<div id="about" className="flex flex-col items-center justify-center py-20">
			<Heading title="ABOUT US" />
			<div className="relative w-[70%] mt-10">
				<div className="absolute -top-5 -left-5">
					<OpenQuote />
				</div>
				<div className="p-5 text-sm">{data?.data.about}</div>
				<div className="absolute -bottom-5 -right-5">
					<CloseQuote />
				</div>
			</div>
		</div>
	);
};

export default About;
