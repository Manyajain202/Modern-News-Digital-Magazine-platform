import { useState } from "react"
import articles from "../data/articles"
import ArticleCard from "../components/ArticleCard"

function Bookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    return JSON.parse(
      localStorage.getItem("bookmarkedArticles") || "[]"
    )
  })

  const bookmarkedArticles = articles.filter((article) =>
    bookmarkedIds.includes(article.id)
  )

  const handleRemove = (id) => {
    const updatedBookmarks = bookmarkedIds.filter(
      (bookmarkId) => bookmarkId !== id
    )

    localStorage.setItem(
      "bookmarkedArticles",
      JSON.stringify(updatedBookmarks)
    )

    setBookmarkedIds(updatedBookmarks)
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
          Bookmarked Articles
        </h1>

        {bookmarkedArticles.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            No bookmarked articles yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedArticles.map((article) => (
              <div key={article.id}>
                <ArticleCard article={article} />

                <button
                  onClick={() => handleRemove(article.id)}
                  className="mt-2 text-red-600 hover:text-red-800 font-semibold"
                >
                  Remove Bookmark
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}

export default Bookmarks