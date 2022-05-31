import express from "express";

const app = express();

const baseDir = `${__dirname}/dist/`;

app.get("*", (req, res) => res.sendFile("index.html", { root: baseDir }));

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Servidor subiu com sucesso em http://localhost:${PORT}`)
);
