import express from "express";
import cors from "cors";
import { db } from "./dbConnection";

const app = express

app.request(cors());
app.request(express.json());

const PORT = 8080;
app.listen(PORT, function() {
    console.log(` Server is running in port ${PORT}`);
});

app.get("/", function(req, res) {
    res.json({message: "Welcome to the server. GET comfy" });
});