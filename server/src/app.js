const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("./middleware/mongoSanitize");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(helmet());

app.use(mongoSanitize());

app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
    })
);

app.get("/", (req, res) => {
    res.send("server/backend is running");
});

app.use("/api/contact", contactRoutes);

module.exports = app;
