const pathways = [
  { title: 'Homeowners', text: 'Backup and solar power sized for your household.', href: '#contact?service=residential' },
  { title: 'Civil Servants', text: 'Ask about our zero-deposit promotion for civil servants.', href: '#promotion' },
  { title: 'Farmers & Agriculture', text: 'Farm power, solar pumping and irrigation solutions.', href: '#contact?service=agricultural' },
  { title: 'Commercial & Industrial', text: 'Solar for businesses, factories and institutions.', href: '#contact?service=commercial-industrial' },
  { title: 'Maintenance & Equipment', text: 'Repairs, servicing and quality solar equipment supply.', href: '#contact?service=maintenance-repairs' },
]

export default function Pathways() {
  return (
    <section className="pathways">
      <div className="container">
        <div className="section-head">
          <h2>Find the Right Path for You</h2>
          <p className="lead">Start with who you are — we will help with the rest.</p>
        </div>
        <div className="pathway-grid">
          {pathways.map((p) => (
            <a className="pathway" href={p.href} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
