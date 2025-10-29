const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-apple-gray-200 bg-apple-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-gray-800">成长之路</h3>
            <p className="text-sm text-apple-gray-500">
              记录在AI、产品管理、编程、创业、Web3、量子领域的学习成果
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-gray-800">领域</h3>
            <ul className="space-y-2 text-sm text-apple-gray-500">
              <li>人工智能 AI</li>
              <li>产品管理</li>
              <li>编程开发</li>
              <li>创业创新</li>
              <li>Web3</li>
              <li>量子科技</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-gray-800">联系方式</h3>
            <p className="text-sm text-apple-gray-500">
              持续学习，持续成长
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-apple-gray-200 text-center text-sm text-apple-gray-400">
          <p>© {currentYear} 成长之路. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
