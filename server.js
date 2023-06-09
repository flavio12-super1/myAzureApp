const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

// Serve static files from the "build" directory
app.use(express.static(path.resolve(__dirname, "./build")));

// Handle requests for the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
