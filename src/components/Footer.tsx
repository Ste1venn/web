const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-apple-gray-200 bg-apple-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-gray-800">Ste1ven</h3>
            <p className="text-sm text-apple-gray-500">
              记录在AI、产品、编程、创业、Web3、量子领域的学习成果
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-gray-800">领域</h3>
            <ul className="space-y-2 text-sm text-apple-gray-500">
              <li>AI</li>
              <li>产品</li>
              <li>编程</li>
              <li>创业</li>
              <li>Web3</li>
              <li>量子</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-apple-gray-800">联系方式</h3>
            <p className="text-sm text-apple-gray-500">
              微信：TargetTracker
              <br />
              QQ：1544246349
              <br />
              个人公众号：野生AiPM&Entrepreneur
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-apple-gray-200 text-center text-sm text-apple-gray-400">
          <p>© {currentYear} Ste1ven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
