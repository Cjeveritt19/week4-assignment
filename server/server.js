import express, { request, response} from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function() {
    console.log(` Server is running in port ${PORT}`);
});

app.get("/", function(req, res) {
    res.json({message: "Welcome to the server. GET comfy" });
});

app.get("/guestbook", async (_, res) => {
    const query = await  db.query(`select * from guestbook`)
    console.log(query);
    res.json(query.rows);
});

app.post("/add-guestbook", (req, res) => {
    const newGuestbook = req.body.formValues;
    const query = db.query(
        `INSERT INTO guestbook (name, email, reason, number) values ($1, $2, $3, $4)`,
        [newGuestBook.name, newGuestBook.email, newGuestBook.reason, newGuestBook.number]);
    res.json("Data sent", query);
});