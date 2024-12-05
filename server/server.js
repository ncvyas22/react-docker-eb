const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(bodyParser.json());

// Task routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
