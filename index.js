const express = require("express"); // Initialization of objects and variables
const path = require("path"); 
const app = express();

app.use(express.static("public/"));

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact-me.html"));
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Running!");
});
