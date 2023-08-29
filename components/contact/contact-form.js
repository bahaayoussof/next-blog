import { useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");

	const inputChangeHandler = setState => e => {
		setState(e.target.value);
	};

	const submitHandler = e => {
		if (e) e.preventDefault();

		if (
			enteredEmail &&
			enteredEmail.includes("@") &&
			enteredName &&
			enteredName.trim() !== "" &&
			enteredMessage &&
			enteredMessage.trim() !== ""
		) {
			fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					email: enteredEmail,
					name: enteredName,
					message: enteredMessage,
				}),
				headers: { "Content-Type": "application/json" },
			})
				.then(res => res.json())
				.then(data => console.log(data));
		}
	};

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
		</section>
	);
};

export default ContactForm;
