import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ArticleDetails from "./pages/ArticleDetails"
import Bookmarks from "./pages/Bookmarks"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "dark bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App