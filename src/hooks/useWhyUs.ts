import { useQuery } from "@tanstack/react-query";
import IWhyUs from "../entities/WhyUs";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IWhyUs[]>("/why-us");

const useWhyUs = () =>
	useQuery({
		queryKey: ["why-us"],
		queryFn: apiClient.fetch,
	});

export default useWhyUs;
