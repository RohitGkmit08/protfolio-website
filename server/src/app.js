const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
)

app.get("/", (req, res) => {
    res.send("server/backend is running")
})

app.use("/api/contact", contactRoutes);

module.exports = app;
