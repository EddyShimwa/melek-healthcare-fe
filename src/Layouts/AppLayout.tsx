import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div>
			<div>Navbar</div>
			<Outlet />
			<div>Footer</div>
		</div>
	);
};

export default AppLayout;
