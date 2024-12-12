const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Homepage Route
app.get("/", (req, res) => {
  res.render("index", { title: "MD-RESTAPI" });
});

// Server Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
