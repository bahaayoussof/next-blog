function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;
		console.group();
		console.log("email", email.includes("@"));
		console.log("name", name.trim());
		console.log("message", message.trim());
		console.group();

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "invalid input." });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		console.log({ newMessage });

		res.status(201).json({ message: "You message has been received" });
	}
}

export default handler;
