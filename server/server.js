import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send(`Server is running on ${port}`));

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
