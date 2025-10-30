import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const categories = [
    { name: 'AI 人工智能', icon: '/public/ai.svg', color: 'from-blue-500 to-cyan-500', description: '探索机器学习与深度学习' },
    { name: '产品管理', icon: '/public/product.svg', color: 'from-purple-500 to-pink-500', description: '产品思维与用户体验' },
    { name: '编程开发', icon: '/public/coding.svg', color: 'from-green-500 to-emerald-500', description: '代码实践与技术栈' },
    { name: '创业创新', icon: '/public/computer.svg', color: 'from-orange-500 to-red-500', description: '商业模式与创新思维' },
    { name: 'Web3', icon: '/public/web3.svg', color: 'from-indigo-500 to-purple-500', description: '区块链与去中心化' },
    { name: '量子科技', icon: '/public/quantum.svg', color: 'from-teal-500 to-blue-500', description: '量子计算与量子物理' },
  ]

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
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-apple-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-apple-blue via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ste1ven
            </h1>
            <p className="text-xl md:text-2xl text-apple-gray-600 mb-8 max-w-3xl mx-auto">
              记录在 AI、产品管理、编程、创业、Web3、量子领域的学习成果
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/articles"
                className="inline-block px-8 py-4 bg-apple-blue text-white rounded-full font-medium hover:bg-apple-blue-dark transition-colors shadow-lg hover:shadow-xl"
              >
                探索文章
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-apple-gray-800 mb-4">学习领域</h2>
            <p className="text-lg text-apple-gray-600">探索多个前沿技术与商业领域</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-8 rounded-3xl bg-white border border-apple-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <Link to="/articles">
                  <div className="mb-4"><img src={category.icon} alt={category.name} className="w-16 h-16" /></div>
                  <h3 className="text-2xl font-semibold text-apple-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-apple-gray-600">{category.description}</p>
                  </Link>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-apple-blue to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              持续学习，持续成长
            </h2>
            <p className="text-xl text-white/90 mb-8">
              在这里记录每一步成长的足迹
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-white text-apple-blue rounded-full font-medium hover:shadow-xl transition-shadow"
              >
                了解更多
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home
