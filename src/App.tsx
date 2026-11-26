import ContentSheet from './components/ContentSheet'
import Footer from './components/Footer'
import Header from './components/Header'
import SkipLink from './components/SkipLink'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Stack from './sections/Stack'

function App() {
  return (
    <div id="top" className="relative min-h-dvh overflow-x-clip text-ink">
      <SkipLink targetId="contenido" />
      <Header />
      <main id="contenido">
        <Hero />
        <ContentSheet>
          <About />
          <Stack />
          <Experience />
          <Education />
          <Projects />
        </ContentSheet>
      </main>
      <Footer />
    </div>
  )
}

export default App
