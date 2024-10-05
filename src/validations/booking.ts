import { z } from "zod";

export const BookingSchema = z.object({
	name: z.string().min(3, "Name should be at least 3 character long!"),
	email: z.string().email("Invalid email!"),
	subject: z.string().min(5, "Subject should at least 5 character long!"),
	message: z.string().min(20, "Message should be at least 20 character long!"),
});

export type BookingSchemaType = z.infer<typeof BookingSchema>;
