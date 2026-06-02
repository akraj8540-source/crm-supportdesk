import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import TicketTable from "../components/TicketTable";
import { getTickets } from "../api/TicketApi";

function Home() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await getTickets(search, status);
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [search, status]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Support CRM Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage and track all support tickets in one place.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
          <div className="sm:w-64">
            <StatusFilter status={status} setStatus={setStatus} />
          </div>
        </div>

        {/* Ticket Table / Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <span className="ml-3 text-gray-600">Loading tickets...</span>
          </div>
        ) : (
          <TicketTable tickets={tickets} />
        )}
      </div>
    </div>
  );
}

export default Home;