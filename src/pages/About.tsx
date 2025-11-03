import { motion } from 'framer-motion'

const About = () => {
  return (
    <main className="flex-1 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-apple-gray-800 mb-8">关于</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-apple-gray-800 prose-p:text-apple-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              这是一个记录成长的空间，专注于探索和分享在多个前沿领域的学习成果。
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">学习领域</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
              {[
                { icon: '/ai.svg', title: 'AI', desc: 'LLM、Agent、Prompt' },
                { icon: '/product.svg', title: '产品', desc: '产品思维、UI/UX、数据驱动' },
                { icon: '/coding.svg', title: '编程', desc: 'Web开发、架构设计' },
                { icon: '/computer.svg', title: '创业', desc: '商业模式、市场洞察' },
                { icon: '/web3.svg', title: 'Web3', desc: '区块链、智能合约、去中心化' },
                { icon: '/quantum.svg', title: '量子', desc: '量子计算、前沿研究' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-apple-gray-200 hover:border-apple-blue hover:shadow-lg transition-all"
                >
                  <div className="mb-3">
                    <img src={item.icon} alt={item.title} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-apple-gray-800 mb-2">{item.title}</h3>
                  <p className="text-apple-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">成长理念</h2>
            <p className="leading-relaxed">
              这个网站记录了我在不同领域的探索和思考，希望能够：
            </p>
            <ul className="space-y-2 my-6">
              <li>系统化整理学习成果</li>
              <li>分享有价值的见解和经验</li>
              <li>建立知识体系和思维框架</li>
              <li>激发更多的思考和创新</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">内容形式</h2>
            <p className="leading-relaxed">
              内容以多种形式呈现，包括：
            </p>
            <ul className="space-y-2 my-6">
              <li><strong>文章</strong> - 深度思考和系统性总结</li>
              <li><strong>视频</strong> - 直观的演示和讲解</li>
              <li><strong>图片</strong> - 可视化的概念和流程</li>
            </ul>

            <div className="mt-12 p-8 bg-gradient-to-br from-apple-blue/10 to-purple-500/10 rounded-2xl">
              <p className="text-xl font-medium text-apple-gray-800 text-center">
                "可胜在敌，不可胜在己"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default About
