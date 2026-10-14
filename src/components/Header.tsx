import { useState } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Tanil Solar Energy Engineering — home">
          <img src="/assets/logo.png" alt="Tanil Solar Energy Engineering logo" width="196" height="52" />
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={`main-nav${open ? ' open' : ''}`} id="main-nav" aria-label="Main navigation">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
                Request a Solar Assessment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
