const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
