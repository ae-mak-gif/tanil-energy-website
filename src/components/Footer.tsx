import { site, services } from '../config/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{site.name}</h3>
            <p>Solar energy solutions for homes, farms and businesses in Zimbabwe.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              {site.phones.map((p) => (
                <li key={p.tel}><a href={`tel:${p.tel}`}>{p.label}</a></li>
              ))}
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}><a href="#services">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li>
                <a href={`https://wa.me/${site.phones[0].wa}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li><a href="#contact">Send an enquiry</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
