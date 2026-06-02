const express = require("express");
const cors = require("cors");

const ticketRoutes = require("./routes/ticketRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://crm-supportdesk-t314-liard.vercel.app"
    ],
    credentials: true,
}));
app.use(express.json());

app.use("/api/tickets", ticketRoutes);

// Error middleware LAST
app.use(errorHandler);

module.exports = app;