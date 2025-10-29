import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
