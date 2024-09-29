import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/data", (req, res) => {
	const { name, password, email } = req.body;
	console.log(
		`Received data: Name: ${name}, Password: ${password}, Email: ${email}`
	);

	res.json({
		message: `Data received! Name: ${name}, Password: ${password}, Email: ${email}`,
	});
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
