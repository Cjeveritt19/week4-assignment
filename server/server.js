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


app.post("/add-GuestBook", (req, res) => {
    const newGuestBook = req.body.formValues;
    const query = db.query(
        `inster into GuestBook (name, email, reason, number) values ($1, $2, $3, $4)`,
        [newGuestBook.name, newGuestBook.email, newGuestBook.reason, newGuestBook.number]);
        res.json("Data sent", query);
});