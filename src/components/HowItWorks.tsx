const steps = [
  { title: 'You send an enquiry', text: 'Use the form below, or call, email or WhatsApp us with what you need.' },
  { title: 'We review your needs', text: 'We look at your requirements, location and the service that fits best.' },
  { title: 'We follow up with you', text: 'We contact you to clarify details and answer your questions.' },
  { title: 'Assessment & proposal', text: 'Where appropriate, a technical assessment leads to a suitable proposal and quotation.' },
]

export default function HowItWorks() {
  return (
    <section className="pathways" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <h2>How It Works</h2>
          <p className="lead">A simple, transparent process from first message to solar power.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
