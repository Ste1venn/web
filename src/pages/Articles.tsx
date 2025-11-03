import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { articles } from '../data/articles'

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')

  const categories = ['全部', 'AI', '产品', '编程', '创业', 'Web3', '量子']

  const filteredArticles = selectedCategory === '全部'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <main className="flex-1 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-apple-gray-800 mb-4">文章</h1>
          <p className="text-xl text-apple-gray-600">探索学习成果与思考</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-apple-blue text-white shadow-lg'
                  : 'bg-apple-gray-100 text-apple-gray-600 hover:bg-apple-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.slug}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={`/articles/${article.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-apple-gray-200 hover:border-apple-blue hover:shadow-2xl transition-all duration-300">
                  {article.image && (
                    <div className="aspect-video bg-gradient-to-br from-apple-gray-100 to-apple-gray-200 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-apple-blue/10 text-apple-blue rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-apple-gray-400">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-apple-gray-800 mb-2 group-hover:text-apple-blue transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-apple-gray-600 line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4 flex items-center text-apple-blue font-medium">
                      <span className="group-hover:translate-x-2 transition-transform">阅读更多 →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-apple-gray-400">暂无文章</p>
          </motion.div>
        )}
      </div>
    </main>
  )
}

export default Articles
