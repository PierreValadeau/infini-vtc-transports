import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Vehicle from './components/sections/Vehicle'
import About from './components/sections/About'
import Coverage from './components/sections/Coverage'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Vehicle />
        <About />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
