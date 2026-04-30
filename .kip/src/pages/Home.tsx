import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { siteConfig } from '../data/config'
import {
  type Language,
  languagePath,
  localizedExperience,
  localizedGalleryItems,
  localizedHonors,
  localizedInternships,
  text,
} from '../data/i18n'
import './Home.css'

const baseUrl = import.meta.env.BASE_URL
const experienceImages = ['images/c1.jpg', 'images/c2.jpg', 'images/c3.jpg']

interface HomeProps {
  language: Language
}

function Home({ language }: HomeProps) {
  const [copied, setCopied] = useState(false)
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const t = text[language]
  const basePath = language === 'zh' ? '/zh' : ''
  const localizedProfile = language === 'zh' ? siteConfig.translations?.zh : undefined
  const homeName = localizedProfile?.name || siteConfig.name
  const homeBio = localizedProfile?.bio || siteConfig.bio
  const profileHtml = localizedProfile?.profileHtml || siteConfig.profileHtml
  const currentProjects = projects.map(project => {
    const zh = language === 'zh' ? project.translations?.zh : undefined
    return {
      ...project,
      title: zh?.title || project.title,
      description: zh?.description || project.description,
      tags: zh?.tags || project.tags,
    }
  })
  const currentInternships = localizedInternships[language]
  const currentExperience = localizedExperience[language]
  const currentHonors = localizedHonors[language]
  const currentGalleryItems = localizedGalleryItems[language]

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
      <nav className="home-nav" aria-label="Section navigation">
        <a href="#projects">{t.nav.projects}</a>
        <a href="#internships">{t.nav.internships}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#honors">{t.nav.honors}</a>
        <a href="#gallery">{t.nav.gallery}</a>
        <span className="language-switch" aria-label="Language switcher">
          <Link className={language === 'en' ? 'active' : undefined} to={languagePath('en', '/')}>
            {t.actions.english}
          </Link>
          <Link className={language === 'zh' ? 'active' : undefined} to={languagePath('zh', '/')}>
            {t.actions.chinese}
          </Link>
        </span>
      </nav>

      <header className="profile">
        <div className="avatar">
          <img src={`${baseUrl}${siteConfig.avatar}`} alt={homeName} />
        </div>
        <h1 className="name notranslate">{homeName}</h1>
        <p className="bio">{renderBio(homeBio)}</p>
        {profileHtml && (
          <div className="profile-content" dangerouslySetInnerHTML={{ __html: profileHtml }} />
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
                    {copied ? t.actions.copied : label}
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

      <section id="projects" className="projects-section">
        <h2>{t.sections.projects}</h2>
        <ul className="project-list">
          {currentProjects.map(project => (
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
              <Link to={`${basePath}/projects/${project.id}`} className="project-link">
                {`${t.actions.view} \u2192`}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="internships" className="text-section">
        <h2>{t.sections.internships}</h2>
        <div className="internship-list">
          {currentInternships.map(item => (
            <article key={item.title} className="internship-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2>{t.sections.experience}</h2>
        <div className="experience-list">
          {currentExperience.map(item => (
            <article key={item.title} className="experience-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="experience-images" aria-label="Experience highlights">
          {experienceImages.map((imagePath, index) => (
            <img key={imagePath} src={`${baseUrl}${imagePath}`} alt={`Experience photo ${index + 1}`} />
          ))}
        </div>
      </section>

      <section id="honors" className="text-section">
        <h2>{t.sections.honors}</h2>
        <ol className="honors-list">
          {currentHonors.map(item => (
            <li key={item} className="honors-item">{item}</li>
          ))}
        </ol>
      </section>

      <section id="gallery" className="gallery-section">
        <h2>{t.sections.gallery}</h2>
        <p className="gallery-intro">
          {t.galleryIntro}
        </p>
        <div className="gallery-grid">
          {currentGalleryItems.map(item => (
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
        {visitorCount !== null && <p className="visitor-count">{t.actions.totalVisits}: {visitorCount}</p>}
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <p className="powered-by">
          Powered by <a href="https://github.com/kk0x03/kip" target="_blank" rel="noopener noreferrer">Kip</a>
        </p>
      </footer>
    </div>
  )
}

export default Home
