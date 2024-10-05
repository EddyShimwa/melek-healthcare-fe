import { useMutation } from "@tanstack/react-query";
import { IBook } from "../entities/Book";
import APIClient from "../services/api-client";
import { toastError } from "../utils/toastHandler";
import { BookingSchemaType } from "../validations/booking";

const apiClient = new APIClient<IBook, BookingSchemaType>("/bookings");

const useBooking = () =>
	useMutation({
		mutationFn: (data: BookingSchemaType) => apiClient.post(data),
		onError: (error) => {
			toastError(error.message);
		},
	});

export default useBooking;
