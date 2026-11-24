import Nav from './components/Nav';
import Hero from './components/Hero';
import Formula from './components/Formula';
import Texture from './components/Texture';
import Process from './components/Process';
import Ritual from './components/Ritual';
import Inside from './components/Inside';
import Team from './components/Team';
import Closing from './components/Closing';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr-only" href="#formula">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Formula />
        <Texture />
        <Process />
        <Ritual />
        <Inside />
        <Team />
        <Closing />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
