import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { experienceItems } from '../data/experience'
import { galleryItems } from '../data/gallery'
import { siteConfig } from '../data/config'
import './Home.css'

const baseUrl = import.meta.env.BASE_URL

function Home() {
  const [copied, setCopied] = useState(false)
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    // Fetch visitor count from Umami API if configured
    const fetchVisitorCount = async () => {
      const umami = siteConfig.umami
      if (umami?.website_id && umami?.api_token && umami.api_token !== 'YOUR_API_TOKEN_HERE') {
        try {
          const apiUrl = umami.api_url || 'https://api.umami.is/v1'
          const now = Date.now()
          const startAt = new Date('2020-01-01').getTime() // From beginning

          // Try Cloud API format
          const response = await fetch(
            `${apiUrl}/websites/${umami.website_id}/stats?startAt=${startAt}&endAt=${now}`,
            {
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${umami.api_token}`,
                'x-umami-api-key': umami.api_token,
              },
            }
          )

          if (response.ok) {
            const data = await response.json()
            console.log('Umami response:', data)
            // Get pageviews count
            const views =
              typeof data.pageviews === 'number' ? data.pageviews : (data.pageviews?.value || 0)
            setVisitorCount(views)
          } else {
            console.log('Umami API error:', response.status, await response.text())
          }
        } catch (error) {
          console.log('Failed to fetch Umami stats:', error)
        }
      } else {
        console.log('Umami not configured:', siteConfig.umami)
      }
    }

    fetchVisitorCount()
  }, [])

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderBio = (bio?: string) => {
    if (!bio) return null
    const lines = bio.split('\n')
    return lines.map((line, index) => (
      <span key={`bio-line-${index}`}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className="home">
      <header className="profile">
        <div className="avatar">
          <img src={`${baseUrl}${siteConfig.avatar}`} alt={siteConfig.name} />
        </div>
        <h1 className="name notranslate">{siteConfig.name}</h1>
        <p className="bio">{renderBio(siteConfig.bio)}</p>
        {siteConfig.profileHtml && (
          <div className="profile-content" dangerouslySetInnerHTML={{ __html: siteConfig.profileHtml }} />
        )}
        {siteConfig.social && (
          <div className="social-links">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              if (!url) return null
              const isEmail = key === 'email'
              const label = key.charAt(0).toUpperCase() + key.slice(1)

              if (isEmail) {
                return (
                  <button key={key} className="social-btn" onClick={() => copyEmail(url)}>
                    {copied ? 'Copied!' : label}
                  </button>
                )
              }

              return (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              )
            })}
          </div>
        )}
      </header>

      <section className="projects-section">
        <h2>Projects</h2>
        <ul className="project-list">
          {projects.map(project => (
            <li key={project.id} className={`project-item ${project.image ? 'has-image' : ''}`}>
              {project.image && (
                <div className="project-image">
                  <img src={`${baseUrl}${project.image}`} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <Link to={`/projects/${project.id}`} className="project-link">
                View ��
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-list">
          {experienceItems.map(item => (
            <article key={item.title} className="experience-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <p className="gallery-intro">
         As a non-art major, I use drawing as a way to think and communicate. This gallery collects some of my original and fan art creations. While my techniques are still evolving, several of my works have reached 20,000+ recommendations and 3,000+ saves on the platform, with a total engagement of 24,500+. I have also participated in three public art exhibitions. More importantly, these works have led to multiple paid commission opportunities — a strong proof of their resonance with the audience.
        </p>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setLightboxImage(`${baseUrl}${item.image}`)}
            >
              <img src={`${baseUrl}${item.image}`} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <span className="close">&times;</span>
          <img src={lightboxImage} alt="Enlarged view" />
        </div>
      )}

      <footer className="footer">
        {visitorCount !== null && <p className="visitor-count">Total visits: {visitorCount}</p>}
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <p className="powered-by">
          Powered by <a href="https://github.com/kk0x03/kip" target="_blank" rel="noopener noreferrer">Kip</a>
        </p>
      </footer>
    </div>
  )
}

export default Home
