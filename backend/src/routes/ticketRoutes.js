const express = require("express");

const {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
} = require("../controller/ticketController");

const router = express.Router();

// Create a new ticket
router.post("/", createTicket);

// Get all tickets
router.get("/", getAllTickets);

// Get a ticket
router.get("/:ticketId", getTicketById);

// Update Ticket Status and Add Notes
router.put("/:ticketId", updateTicket);

module.exports = router;