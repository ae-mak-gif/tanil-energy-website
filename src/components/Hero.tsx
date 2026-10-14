export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <h1>
            Clean, reliable solar energy for your{' '}
            <span className="hl">home, farm or business</span>
          </h1>
          <p className="lead">
            Tanil Solar Energy Engineering designs, supplies and supports solar solutions across
            Zimbabwe — from residential systems and agricultural solar to commercial installations,
            equipment sales, electrical engineering and maintenance.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Request a Solar Assessment</a>
            <a className="btn btn-outline" href="#services">Explore Our Services</a>
            <a
              className="btn btn-whatsapp"
              href="https://wa.me/263713799295"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="hero-note">
            Not sure what size system you need? Send us an enquiry and we will help you work it out.
          </p>
        </div>
        <svg
          className="hero-art"
          viewBox="0 0 400 300"
          role="img"
          aria-label="Illustration of a house with rooftop solar panels under the sun"
        >
          <circle cx="320" cy="60" r="40" fill="#FDC704" />
          <g stroke="#F78506" strokeWidth="4" strokeLinecap="round">
            <line x1="320" y1="5" x2="320" y2="18" />
            <line x1="375" y1="60" x2="362" y2="60" />
            <line x1="265" y1="60" x2="278" y2="60" />
            <line x1="359" y1="21" x2="350" y2="30" />
            <line x1="281" y1="21" x2="290" y2="30" />
          </g>
          <rect x="40" y="150" width="220" height="110" rx="6" fill="#0E467A" />
          <polygon points="30,150 150,80 270,150" fill="#072C56" />
          <g>
            <rect x="105" y="99" width="62" height="42" rx="3" fill="#117FD8" stroke="#F4F8FC" strokeWidth="2" />
            <line x1="136" y1="99" x2="136" y2="141" stroke="#F4F8FC" strokeWidth="2" />
            <line x1="105" y1="120" x2="167" y2="120" stroke="#F4F8FC" strokeWidth="2" />
          </g>
          <rect x="70" y="185" width="36" height="75" rx="3" fill="#FDC704" />
          <rect x="140" y="185" width="44" height="36" rx="3" fill="#B4CFE5" />
          <rect x="60" y="235" width="300" height="40" rx="6" fill="#DCE9F5" />
          <ellipse cx="90" cy="282" rx="60" ry="8" fill="#C9DCEC" />
          <ellipse cx="300" cy="288" rx="80" ry="8" fill="#C9DCEC" />
        </svg>
      </div>
    </section>
  )
}
