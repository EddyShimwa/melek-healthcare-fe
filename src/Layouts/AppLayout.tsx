import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const AppLayout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default AppLayout;
