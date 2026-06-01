function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name, email, subject, or ticket ID..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-lg px-5 py-3 border border-gray-200 rounded-xl 
                 bg-gray-50 placeholder-gray-400 text-gray-800
                 focus:outline-none focus:bg-white focus:border-blue-700 focus:ring-2 focus:ring-blue-100
                 transition-all duration-200 shadow-sm"
    />
  );
}

export default SearchBar;