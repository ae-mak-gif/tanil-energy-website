const faqs = [
  { q: 'What solar services does Tanil Solar offer?', a: 'We offer residential, commercial and industrial solar solutions, agricultural and farm solar, solar-powered pumps and irrigation, solar equipment sales, electrical engineering services, and solar system maintenance and repairs.' },
  { q: 'Do you provide solar for farms and irrigation?', a: 'Yes. We supply and install solar solutions for farms, including solar-powered pumps and irrigation systems. Share your water source and requirements so we can advise on a suitable setup.' },
  { q: 'Can you maintain or repair an existing solar system?', a: 'Yes, maintenance and repairs are one of our core services. Tell us what system you have and what problem you are experiencing, and we will arrange follow-up.' },
  { q: 'How do I request a solar assessment?', a: 'Submit the enquiry form on this page, or contact us by phone, WhatsApp or email. We will follow up to understand your needs and arrange an assessment where appropriate.' },
  { q: 'Do you sell solar equipment on its own?', a: 'Yes, we sell solar equipment including panels, inverters, batteries and accessories. Contact us with the items you need and we will confirm availability and pricing.' },
  { q: 'What is the zero-deposit promotion for civil servants?', a: 'It is an advertised offer allowing eligible civil servants to get a solar system with no deposit on a 12–24 month payment plan. Eligibility and terms are subject to confirmation by Tanil Solar — please enquire directly for full details.' },
  { q: 'How can I contact Tanil Solar?', a: 'Call or WhatsApp +263 713 799 295, +263 781 680 565 or +263 773 390 860, or email tanilsolar@gmail.com. You can also message our Facebook page, Tanil Solar Energy Engineering.' },
]

export default function FAQ() {
  return (
    <section id="faqs">
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="section-head">
          <h2>Frequently Asked Questions</h2>
        </div>
        {faqs.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <div className="faq-body">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
