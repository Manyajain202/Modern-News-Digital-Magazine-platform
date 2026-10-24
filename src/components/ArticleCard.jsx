import { Link} from "react-router-dom"
import {useState } from "react"
function ArticleCard({ article }) {
         const [bookmarked, setBookmarked] =
         useState(() => {
          const savedBookmarks = JSON.parse(
            localStorage.getItem("bookmarkedArticles") || "[]"
          )

          return 
          savedBookmarks.includes(article.id)

         })


  return (
        <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-blue-600 font-semibold mb-2">
          {article.category}
        </p>

        <h2 className="text-xl font-bold mb-2">
          {article.title}
        </h2>

        <p className="text-gray-600
        dark:text-gray-300">
          {article.description}
        </p>



        <Link 
             to={`/article/${article.id}`}
                className="inline-block mt-4
                text-blue-600 font-semibold
                hover:underline">
                  Read Article 
             </Link>


        <button 
        onClick={()=> {
          const savedBookmarks = JSON.parse(
            localStorage.getItem("bookmarkedArticles") || "[]"
          )

          let updatedBookmarks

          if (bookmarked) {
            updatedBookmarks =
            savedBookmarks.filter (
              (id) => id !== article.id 
              )

          }else {
            updatedBookmarks =
            [...savedBookmarks,article.id]
          }

          localStorage.setItem(
            "bookmarkedArticles",
            JSON .stringify(updatedBookmarks)

          )
          setBookmarked(!bookmarked)
        }}

        className="ml-4  text-gray-600 hover:text-blue-600"
        >
          {bookmarked ? " 🔖Bookmarked" : " 🔖Bookmark"}
        </button>
         </div>

    </article>
  )
}

export default ArticleCard