import { useNavigate, Link } from "react-router-dom";
import TicketForm from "../components/TicketForm";
import { createTicket } from "../api/ticketApi";

function CreateTicket() {
  const navigate = useNavigate();

  const handleCreateTicket = async (formData) => {
    try {
      const response = await createTicket(formData);
      alert(response.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create ticket");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back button + header row */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
          <div className="w-8" /> {/* spacer for alignment */}
        </div>

        {/* Header with icon */}
        <div className="mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create Ticket</h1>
              <p className="mt-1 text-sm text-gray-500">Fill out the form below to submit a new support request</p>
            </div>
          </div>
        </div>

        {/* Form Card with subtle hover effect and gradient top border */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <div className="h-1 bg-linear-to-r from-blue-500 to-indigo-500" />
          <div className="p-6 md:p-8">
            <TicketForm onSubmit={handleCreateTicket} />
          </div>
        </div>

        {/* Optional: helper text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          All fields marked with <span className="text-red-500">*</span> are required
        </p>
      </div>
    </div>
  );
}

export default CreateTicket;