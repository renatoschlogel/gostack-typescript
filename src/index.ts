import express from "express";

const app = express();

import { saudacao } from "./routes";

app.get('/', saudacao);

app.listen(3333);