const express = require("express");
const cors = require("cors");

const ticketRoutes = require("./routes/ticketRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.use("/api/tickets", ticketRoutes);

// Error middleware LAST
app.use(errorHandler);

module.exports = app;