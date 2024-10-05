import { useQuery } from "@tanstack/react-query";
import IMilestone from "../entities/Milestone";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IMilestone[]>("/milestones");

const useMilestones = () =>
	useQuery({
		queryKey: ["milestones"],
		queryFn: apiClient.fetch,
	});

export default useMilestones;
