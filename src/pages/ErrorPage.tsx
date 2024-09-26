import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="w-full h-screen overflow-hidden">
			{/* <NavBar /> */}
			<section className="bg-white w-full h-screen relative flex items-center bg-cover justify-center object-center object-cover">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
							Oops!
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold text-app-green md:text-4xl">
							{isRouteErrorResponse(error)
								? "That page doesn’t exist."
								: "Unexpected error occured!"}
						</p>
						{isRouteErrorResponse(error) ? (
							<Link to={"/"}>
								<button
									type="button"
									className="text-white mt-5 bg-app-green font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									Go back home
								</button>
							</Link>
						) : (
							<p className="mb-4 text-lg font-light text-gray-500">
								We are already working to solve the problem.{" "}
							</p>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ErrorPage;
