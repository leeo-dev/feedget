import express from "express";
const app = express();

import { feedbackRoute } from "./routes";

app.use(express.json());
app.use(feedbackRoute);

app.listen(3333, () => console.log("Ser is running on http://localhost:3333"));
