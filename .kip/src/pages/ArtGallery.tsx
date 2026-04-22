import { useState } from 'react'
import './ArtGallery.css'

const baseUrl = import.meta.env.BASE_URL

// Replace with your actual image filenames
const artworks = [
  { id: 1, title: "Artwork 1", src: "images/art/art1.jpg", description: "Description 1" },
  { id: 2, title: "Artwork 2", src: "images/art/art2.jpg", description: "Description 2" },
  { id: 3, title: "Artwork 3", src: "images/art/art3.jpg", description: "Description 3" },
  { id: 4, title: "Artwork 4", src: "images/art/art4.jpg", description: "Description 4" },
  { id: 5, title: "Artwork 5", src: "images/art/art5.jpg", description: "Description 5" },
  { id: 6, title: "Artwork 6", src: "images/art/art6.jpg", description: "Description 6" },
  { id: 7, title: "Artwork 7", src: "images/art/art7.jpg", description: "Description 7" },
  { id: 8, title: "Artwork 8", src: "images/art/art8.jpg", description: "Description 8" },
  { id: 9, title: "Artwork 9", src: "images/art/art9.jpg", description: "Description 9" },
  { id: 10, title: "Artwork 10", src: "images/art/art10.jpg", description: "Description 10" },
]

function ArtGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <div className="art-gallery-page">
      <h1>Art Gallery</h1>
      <p className="art-description">
        A collection of my original artwork, including digital painting, watercolor, sketching, and photography.
        Each piece reflects my exploration of color, form, and visual storytelling.
      </p>
      
      <div className="art-grid">
        {artworks.map((art) => (
          <div 
            key={art.id} 
            className="art-card"
            onClick={() => setLightboxImage(art.src)}
          >
            <img src={`${baseUrl}${art.src}`} alt={art.title} />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>

      {/* Lightbox for enlarged view */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <span className="close">&times;</span>
          <img src={`${baseUrl}${lightboxImage}`} alt="Enlarged view" />
        </div>
      )}
    </div>
  )
}

export default ArtGallery
