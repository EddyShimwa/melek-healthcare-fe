import useCompanyProfile from "../../hooks/useCompanyProfile";
import Heading from "../common/Heading";
import CloseQuote from "../SVGs/CloseQuote";
import OpenQuote from "../SVGs/OpenQuote";

const Story = () => {
	const { data, error } = useCompanyProfile();

	if (error) throw new Error(error.message);

	return (
		<div className="flex flex-col items-center justify-center py-20">
			<Heading title="OUR STORY" />
			<div
				className="w-11/12 md:w-4/5 py-20 mt-10 relative bg-cover bg-center flex items-center justify-center"
				style={{
					backgroundImage: `url(${data?.data.story_image_url})`,
				}}
			>
				<div className="relative w-11/12 md:w-4/5 p-5 md:p-10 bg-white">
					<div>
						<OpenQuote />
					</div>
					<div className="p-5 md:p-10 text-sm">
						{data?.data.story_description}
					</div>
					<div className="flex justify-end">
						<CloseQuote />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
