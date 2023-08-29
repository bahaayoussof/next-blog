import { MongoClient } from "mongodb";

async function handler(req, res) {
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

		let client;
		try {
			client = await MongoClient.connect(
				"mongodb+srv://zoka:H2OHXDKOFP18jfDg@cluster0.yofqh5m.mongodb.net/next-blog?retryWrites=true&w=majority"
			);
		} catch (error) {
			res.status(500).json({ message: "Could not connect to database!" });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			res.status(500).json({ message: "Storing message failed!" });
			client.close();
			return;
		}

		res.status(201).json({ message: "Your message has been received.", message: newMessage });
	}
}

export default handler;
