import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { siteConfig } from './data/config'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ArtGallery from './pages/ArtGallery'
import './App.css'

function App() {
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', siteConfig.theme || 'dark')
    root.setAttribute('data-layout', siteConfig.layout?.style || 'list')
    root.setAttribute('data-avatar', siteConfig.layout?.avatar || 'circle')
    root.setAttribute('data-card', siteConfig.layout?.card || 'bordered')

    // Set page title from config
    if (siteConfig.title) {
      document.title = siteConfig.title
    }

    // Load Umami analytics if configured
    if (siteConfig.umami?.website_id && siteConfig.umami.website_id !== 'YOUR_WEBSITE_ID') {
      const script = document.createElement('script')
      script.defer = true
      script.src = siteConfig.umami.src || 'https://cloud.umami.is/script.js'
      script.setAttribute('data-website-id', siteConfig.umami.website_id)
      document.head.appendChild(script)
    }
  }, [])

  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects/:projectId" element={<ProjectDetail />} />
  <Route path="/art" element={<ArtGallery />} />  {/* ← 添加这一行 */}
</Routes>
  )
}

export default App
