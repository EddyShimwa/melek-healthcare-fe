import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { BookingSchema, BookingSchemaType } from "../../validations/booking";
import FormButton from "./components/FormButton";
import FormField from "./components/FormField";
import InputField from "./components/InputField";
import useBooking from "../../hooks/useBook";

interface Props {
	toggleModal: () => void;
	setIsSuccess: () => void;
}

const BookingForm: FC<Props> = ({ toggleModal, setIsSuccess }) => {
	const [content, setContent] = useState<string>("");
	const addBooking = useBooking();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setValue,
		trigger,
	} = useForm<BookingSchemaType>({
		resolver: zodResolver(BookingSchema),
	});

	useEffect(() => {
		if (content) {
			setValue("message", content);
			trigger("message");
		}
	}, [content, setValue, trigger]);

	const onSubmit = (formData: BookingSchemaType) => {
		addBooking.mutate(formData, {
			onSuccess: () => {
				toggleModal();
				reset();
				setIsSuccess();
			},
		});
	};

	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<FormField label="Name or Company title" htmlFor="name">
				<InputField
					id="name"
					type="text"
					name="name"
					register={register}
					placeholder="Enter your name or compant title here"
					error={errors.name}
				/>
			</FormField>
			<FormField label="Email address" htmlFor="email">
				<InputField
					id="email"
					type="email"
					name="email"
					register={register}
					placeholder="Enter your email address here"
					error={errors.email}
				/>
			</FormField>
			<FormField label="Subject" htmlFor="subject">
				<InputField
					id="subject"
					type="text"
					name="subject"
					register={register}
					placeholder="Enter your subject here"
					error={errors.subject}
				/>
			</FormField>
			<FormField label="Message" htmlFor="message">
				<Editor
					apiKey="oy3f0667dm8vv681slskj4lk254o1jhliecbm63vyl9ks6e9"
					init={{
						height: 250,
						plugins:
							"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
						toolbar:
							"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
						skin: "oxide",
						content_css: "light",
						body_class: "light-mode",
					}}
					onEditorChange={(newContent) => setContent(newContent)}
				/>
				<p className="text-xs text-red-600 my-1 min-h-4">
					{errors.message && errors.message.message}
				</p>
			</FormField>
			<div className="w-full flex items-center justify-end pt-5">
				<FormButton
					type="submit"
					icon={<FaPlus />}
					text={"Book"}
					disabled={false}
				/>
			</div>
		</form>
	);
};

export default BookingForm;
