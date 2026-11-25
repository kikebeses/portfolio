import ContentSheet from './components/ContentSheet'
import Header from './components/Header'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  return (
    <div id="top" className="relative min-h-dvh overflow-x-clip text-ink">
      <Header />
      <main>
        <Hero />
        <ContentSheet>
          <About />
          <Experience />
          <Projects />
        </ContentSheet>
      </main>
    </div>
  )
}

export default App
