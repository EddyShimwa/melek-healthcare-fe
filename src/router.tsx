import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [{ index: true, element: <HomePage /> }],
	},
]);

export default router;
