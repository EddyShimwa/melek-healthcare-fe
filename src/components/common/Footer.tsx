import useCompanyProfile from "../../hooks/useCompanyProfile";

const Footer = () => {
	const { data } = useCompanyProfile();
	return (
		<div className="w-screen py-3 text-center uppercase text-xs bg-gray-300">
			@{new Date(Date.now()).getFullYear()}&nbsp;{data?.data.company_name}
		</div>
	);
};

export default Footer;
