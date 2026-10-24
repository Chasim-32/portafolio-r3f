
import HeroHeader from './components/HeroHeader'
import ProjectsSection from './components/ProjectsSection'
import TechnologiesSection from './components/TechnologiesSection'
import './App.css'

function AboutSection() {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="about-number">01 / SOBRE MÍ</div>

      <div className="about-layout">
        <h2>
          Aprender.
          <br />
          Crear.
          <br />
          <span>Mejorar.</span>
        </h2>

        <div className="about-copy">
          <p className="about-lead">
            Soy José Manuel, estudiante de Ingeniería de Sistemas
            y desarrollador en formación.
          </p>

          <p>
            Me interesa entender cómo se construye el software,
            desde el diseño de una solución hasta su implementación.
            Disfruto trabajar con programación, bases de datos y
            desarrollo web para transformar ideas en proyectos reales.
          </p>

          <div className="about-stamp">
            CURIOSIDAD
            <br />
            + CÓDIGO
            <br />
            + CONSTANCIA
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
      <span className="section-kicker">05 / HABLEMOS</span>

      <h2>
        ¿Construimos
        <br />
        algo <span>genial?</span>
      </h2>

      <p>
        Estoy interesado en aprender, colaborar y participar
        en proyectos que representen nuevos retos.
      </p>

      <div className="contact-actions">
        {/* CAMBIA la URL por la dirección de tu perfil de GitHub */}
        <a
          className="contact-button"
          href="https://github.com/Chasim-32"
          target="_blank"
          rel="noreferrer"
        >
          Visitar mi GitHub ↗
        </a>

        {/* CAMBIA el correo por el que quieras publicar */}
        <a
          className="contact-link"
          href="mailto:tu-correo@ejemplo.com"
        >
          Escríbeme por correo
        </a>
      </div>

      <div className="contact-decoration" aria-hidden="true">
        JM.
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#inicio">JM.</a>
      <span>Portafolio de José Manuel · 2026</span>
      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <HeroHeader />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
