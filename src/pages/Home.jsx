import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import ArticleCard from "../components/ArticleCard"
import articles from "../data/articles"

function Home() {
  const [search, setSearch] = useState("")

  const [searchParams, setSearchParams] = useSearchParams()

  const category = searchParams.get("category") || "All"

  const featuredArticle = articles.find(
    (article) => article.featured
  )

  const searchText = search.toLowerCase()

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchText) ||
      article.description.toLowerCase().includes(searchText) ||
      article.category.toLowerCase().includes(searchText)

    const matchesCategory =
      category === "All" ||
      article.category === category

    return matchesSearch && matchesCategory
  })

  const handleCategoryChange = (newCategory) => {
    if (newCategory === "All") {
      setSearchParams({})
    } else {
      setSearchParams({
        category: newCategory,
      })
    }
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6">

       
        {featuredArticle && category === "All" && (
          <div className="mb-10 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">

            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">

              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Featured News
              </p>

              <h2 className="text-3xl font-bold mb-3 text-black dark:text-white">
                {featuredArticle.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                {featuredArticle.description}
              </p>

            </div>
          </div>
        )}
            {category === "All" && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                🔥Trending News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles
                .filter((article) =>
                article.trending)
                .map((article) => (
                  <ArticleCard
                         key={article.id}
                         article={article}
                         />
                      ))}

              </div>
            </div>
            )}


                <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
          {category === "All"
            ? "Latest News"
            : `${category} News`}
        </h1>

        
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 mb-8 border rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white"
        />

       

        <div className="flex gap-3 flex-wrap mb-8">

          <button
            onClick={() => handleCategoryChange("All")}
            className={
              category === "All"
                ? "px-4 py-2 bg-black text-white rounded-lg"
                : "px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
            }
          >
            All
          </button>

          <button
            onClick={() => handleCategoryChange("Technology")}
            className={
              category === "Technology"
                ? "px-4 py-2 bg-black text-white rounded-lg"
                : "px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
            }
          >
            Technology
          </button>

          <button
            onClick={() => handleCategoryChange("Business")}
            className={
              category === "Business"
                ? "px-4 py-2 bg-black text-white rounded-lg"
                : "px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
            }
          >
            Business
          </button>

          <button
            onClick={() => handleCategoryChange("Sports")}
            className={
              category === "Sports"
                ? "px-4 py-2 bg-black text-white rounded-lg"
                : "px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg"
            }
          >
            Sports
          </button>

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

        

        {filteredArticles.length === 0 && (
          <p className="text-gray-600 dark:text-gray-300 text-center py-10">
            No articles found.
          </p>
        )}

      </div>
    </main>
  )
}

export default Home
