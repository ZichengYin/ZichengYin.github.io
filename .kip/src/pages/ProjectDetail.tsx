import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import { type Language, languagePath, text } from '../data/i18n'
import './ProjectDetail.css'

const baseUrl = import.meta.env.BASE_URL

interface ProjectDetailProps {
  language: Language
}

function ProjectDetail({ language }: ProjectDetailProps) {
  const { projectId } = useParams<{ projectId: string }>()
  const project = getProjectById(projectId || '')
  const t = text[language]

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-language-switch" aria-label="Language switcher">
          <Link to={languagePath('en', window.location.pathname)} className={language === 'en' ? 'active' : undefined}>
            {t.actions.english}
          </Link>
          <Link to={languagePath('zh', window.location.pathname)} className={language === 'zh' ? 'active' : undefined}>
            {t.actions.chinese}
          </Link>
        </div>
        <div className="not-found">
          <h1>{t.projectNotFound.title}</h1>
          <p>{t.projectNotFound.body}</p>
          <Link to={language === 'zh' ? '/zh' : '/'} className="back-link">{`\u2190 ${t.actions.backHome}`}</Link>
        </div>
      </div>
    )
  }

  const zhProject = language === 'zh' ? project.translations?.zh : undefined
  const currentProject = {
    ...project,
    title: zhProject?.title || project.title,
    description: zhProject?.description || project.description,
    html: zhProject?.html || project.html,
  }

  return (
    <article className="project-detail">
      <div className="project-topbar">
        <Link to={language === 'zh' ? '/zh' : '/'} className="back-link">{`\u2190 ${t.actions.backHome}`}</Link>
        <div className="project-language-switch" aria-label="Language switcher">
          <Link to={languagePath('en', window.location.pathname)} className={language === 'en' ? 'active' : undefined}>
            {t.actions.english}
          </Link>
          <Link to={languagePath('zh', window.location.pathname)} className={language === 'zh' ? 'active' : undefined}>
            {t.actions.chinese}
          </Link>
        </div>
      </div>

      {currentProject.image && (
        <div className="project-hero">
          <img src={`${baseUrl}${currentProject.image}`} alt={currentProject.title} />
        </div>
      )}

      <header className="project-header">
        <h1>{currentProject.title}</h1>
        {currentProject.description && (
          <p className="project-subtitle">{currentProject.description}</p>
        )}
        <div className="project-meta">
          {currentProject.link && (
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-external-link"
            >
              {`${t.actions.viewProject} \u2192`}
            </a>
          )}
          {currentProject.source === 'notion' && (
            <span className="source-badge">From Notion</span>
          )}
        </div>
      </header>

      <div
        className="project-content markdown-body"
        dangerouslySetInnerHTML={{ __html: currentProject.html }}
      />
    </article>
  )
}

export default ProjectDetail
