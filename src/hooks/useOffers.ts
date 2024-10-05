import { useQuery } from "@tanstack/react-query";
import IOffer from "../entities/Offer";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IOffer[]>("/offers");

const useOffers = () =>
	useQuery({
		queryKey: ["offers"],
		queryFn: apiClient.fetch,
	});

export default useOffers;
