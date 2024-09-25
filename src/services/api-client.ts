import axios, {
	AxiosInstance,
	InternalAxiosRequestConfig,
	AxiosResponse,
	AxiosError,
	AxiosRequestConfig,
} from "axios";

export interface FetchResponse<T> {
	statusCode: number;
	message: string;
	data: T;
}

const API: AxiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
	timeout: 50000,
	headers: {},
});

const requestHandler = (
	config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
	const token = localStorage.getItem("access_token") || "";
	config.headers = config.headers || {};
	config.headers.Authorization = `Bearer ${token}`;
	return config;
};

const responseHandler = (response: AxiosResponse): AxiosResponse => response;

const errorHandler = (error: AxiosError): Promise<never> => {
	return Promise.reject(
		(error.response && error.response.data) || "Something went wrong",
	);
};

API.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => requestHandler(config),
	(error: AxiosError) => errorHandler(error),
);

API.interceptors.response.use(
	(response: AxiosResponse) => responseHandler(response),
	(error: AxiosError) => errorHandler(error),
);

class APIClient<T> {
	constructor(public readonly endpoint: string) {}

	fetch = (config: AxiosRequestConfig) =>
		API.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
}

export default APIClient;
