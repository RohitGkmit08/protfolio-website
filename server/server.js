require("dotenv").config();

const app = require("./src/app.js");
const connectDb = require("./src/config/db.js");

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await connectDb();

    app.listen(PORT, () => {
        console.log(`app is running on port ${PORT}`);
    });
};
startServer();
