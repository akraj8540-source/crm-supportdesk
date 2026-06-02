const express = require("express");
const cors = require("cors");

const ticketRoutes = require("./routes/ticketRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://crm-supportdesk-frontend.vercel.app",
        "https://crm-supportdesk-onrender.com"
    ],
    credentials: true,
}));
app.use(express.json());

app.use("/api/tickets", ticketRoutes);

// Error middleware LAST
app.use(errorHandler);

module.exports = app;