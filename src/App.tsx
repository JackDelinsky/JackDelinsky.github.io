import Hero from './components/Hero';
import ProjectLog from './components/ProjectLog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <ProjectLog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
