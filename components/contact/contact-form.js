import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "./../ui/notification";

const sendContactData = async contactDetail => {
	const res = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetail),
		headers: { "Content-Type": "application/json" },
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message || "Something went wrong!");
	}
};

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");
	const [requestStatus, setRequestStatus] = useState();
	const [requestError, setRequestError] = useState();

	const inputChangeHandler = setState => e => {
		setState(e.target.value);
	};

	const submitHandler = async e => {
		if (e) e.preventDefault();
		setRequestStatus("pending");
		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			setRequestStatus("success");
			setEnteredEmail("");
			setEnteredName("");
			setEnteredMessage("");
		} catch (error) {
			setRequestStatus("error");
			setRequestError(error);
		}
	};

	let notification;

	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending Message...",
			message: "Your message on its way.",
		};
	}
	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Success",
			message: "Message sent Successfully",
		};
	}

	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Error!",
			message: requestError,
		};
	}

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>

			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={enteredEmail}
							onChange={inputChangeHandler(setEnteredEmail)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							required
							value={enteredName}
							onChange={inputChangeHandler(setEnteredName)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						name="message"
						id="message"
						rows="5"
						required
						value={enteredMessage}
						onChange={inputChangeHandler(setEnteredMessage)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>

			{notification && (
				<Notification
					title={notification?.title}
					message={notification?.message}
					status={notification?.status}
				/>
			)}
		</section>
	);
};

export default ContactForm;
