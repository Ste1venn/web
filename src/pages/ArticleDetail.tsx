import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles } from '../data/articles'

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <main className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-apple-gray-800 mb-4">文章未找到</h1>
          <Link to="/articles" className="text-apple-blue hover:underline">
            返回文章列表
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 pt-20">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/articles"
            className="inline-flex items-center text-apple-blue hover:text-apple-blue-dark mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="ml-2">返回文章列表</span>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 text-sm font-medium bg-apple-blue/10 text-apple-blue rounded-full">
                {article.category}
              </span>
              <span className="text-apple-gray-400">{article.date}</span>
            </div>
            <h1 className="text-5xl font-bold text-apple-gray-800 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-apple-gray-600">{article.excerpt}</p>
          </div>

          {article.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 rounded-2xl overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none prose-headings:text-apple-gray-800 prose-p:text-apple-gray-600 prose-a:text-apple-blue prose-strong:text-apple-gray-800 prose-code:text-apple-blue prose-code:bg-apple-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-apple-gray-800 prose-pre:text-apple-gray-100"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </motion.div>
        </motion.div>
      </article>
    </main>
  )
}

export default ArticleDetail
