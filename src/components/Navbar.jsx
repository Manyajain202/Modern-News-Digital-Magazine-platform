import { Link } from "react-router-dom"

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={
        darkMode
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-black border-b"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <Link
            to="/"
            className="text-2xl font-bold"
          >
            NewsDaily
          </Link>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6">

            <Link
              to="/"
              className="hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/?category=Technology"
              className="hover:text-blue-400"
            >
              Technology
            </Link>

            <Link
              to="/?category=Business"
              className="hover:text-blue-400"
            >
              Business
            </Link>

            <Link
              to="/?category=Sports"
              className="hover:text-blue-400"
            >
              Sports
            </Link>

            <Link
              to="/bookmarks"
              className="hover:text-blue-400"
            >
              Bookmarks
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode
                  ? "px-3 py-2 rounded-lg bg-gray-700 text-white"
                  : "px-3 py-2 rounded-lg bg-gray-200 text-black"
              }
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar