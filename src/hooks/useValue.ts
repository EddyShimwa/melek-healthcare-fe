import { useQuery } from "@tanstack/react-query";
import IValue from "../entities/Value";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IValue[]>("/values");

const useValues = () =>
	useQuery({
		queryKey: ["Values"],
		queryFn: apiClient.fetch,
	});

export default useValues;
