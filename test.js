// app.js
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Vditor from "vditor";
import "vditor/dist/index.css";
import App from "./App";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const vditor = new Vditor("vditor", {
    after: () => {
      vditor.setValue("`Vditor` 最小代码示例");
    },
  });
  const html = renderToString(<App />);
  res.send(`
    <html>
      <head>
        <title>Vditor Example</title>
        <link rel="stylesheet" href="/index.css">
      </head>
      <body>
        <div id="vditor" class="vditor">${html}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
