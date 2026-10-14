import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pathways from './components/Pathways'
import Promotion from './components/Promotion'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Pathways />
        <Promotion />
        <About />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
