import { useState } from "react"
import { useParams } from "react-router-dom"
import articles from "../data/articles"

function ArticleDetails() {
  const { id } = useParams()

  const[fontSize,setFontSize]=
  useState("text-lg")


  const article = articles.find((item) => item.id === Number(id))

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-100  dark:bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold">
            Article not found
          </h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100  dark:bg-gray-900 py-10">
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-blue-600  dark:text-blue-400 font-semibold mb-3">
          {article.category}
        </p>
            <div className="bg-white 
            dark:bg-gray-800  rounded-xl p-4 mb-6 shadow">
              <div className="flex flex-wrap items-center gap-3">


                <span className="font-semibold text-black dark:text-white">
                       Reading size:
                </span>
                <button 
                onClick={()=>
                  setFontSize("text-base")
                }
                className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700  text-black dark:text-white"
              >
                Small
              </button>
              <button 
                onClick={()=>
                  setFontSize("text-lg")
                }
                className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700  text-black dark:text-white"
              >
                Medium 
              </button>
              <button 
                onClick={()=>
                  setFontSize("text-xl")
                }
                className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700  text-black dark:text-white"
              >
                Large 
              </button>
                </div>
            </div>


        <h1 className="text-4xl  font-bold text-black dark:text-white mb-6">
          {article.title}
        </h1>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />

        <p className={`${fontSize}
        text-gray-600 dark:text-gray-300 leading-8`}>
          {article.description}
        </p>

      </div>
    </main>
  )
}

export default ArticleDetails
