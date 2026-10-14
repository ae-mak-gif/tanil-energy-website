import { services } from '../config/site'
import Icon from './Icons'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <h2>Our Solar Services</h2>
          <p className="lead">
            Seven ways we help you generate, use and maintain solar power. Every project is
            different — tell us what you need and we will recommend a suitable solution.
          </p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <article className="card" key={s.id}>
              <div className="icon" aria-hidden="true"><Icon id={s.id} /></div>
              <span className="tag">{s.audience}</span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <a className="card-link" href={`#contact?service=${s.id}`}>
                Enquire about this service →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
