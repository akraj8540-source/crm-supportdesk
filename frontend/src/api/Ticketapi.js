import axios from "axios";

const API = "http://localhost:3000/api/tickets";

export const getTickets = async (
  search = "",
  status = ""
) => {
  const response = await axios.get(API, {
    params: {
      search,
      status,
    },
  });

  return response.data;
};

export const getTicketById = async (
  ticketId
) => {
  const response = await axios.get(
    `${API}/${ticketId}`
  );

  return response.data;
};

export const createTicket = async (
  ticketData
) => {
  const response = await axios.post(
    API,
    ticketData
  );

  return response.data;
};

export const updateTicket = async (
  ticketId,
  data
) => {
  const response = await axios.put(
    `${API}/${ticketId}`,
    data
  );

  return response.data;
};