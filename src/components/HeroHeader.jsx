
import Scene3D from './Scene3D'

export default function HeroHeader() {
  return (
    <header className="hero" id="inicio">
      <nav className="navbar">
        <a className="brand" href="#inicio">JM<span>.</span></a>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div className="hero-content">
        <section className="hero-copy">
          <span className="hero-kicker">
            INGENIERÍA DE SISTEMAS · PORTAFOLIO
          </span>

          <h1>
            Hola, soy
            <br />
            <span>José Manuel.</span>
          </h1>

          <h2>Desarrollador en formación</h2>

          <p>
            Me apasiona la tecnología, el desarrollo de software
            y construir soluciones que conviertan ideas en
            proyectos reales.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#proyectos">
              Explorar proyectos <span>↗</span>
            </a>

            <a className="button-secondary" href="#sobre-mi">
              Conóceme
            </a>
          </div>

          <div className="hero-tags">
            <span>Desarrollo web</span>
            <span>Software</span>
            <span>Aprendizaje continuo</span>
          </div>
        </section>

        <div className="hero-visual">
          <div className="photo-frame">
            {/* REEMPLAZA la imagen colocando tu foto en public/foto-perfil.jpg */}
            <img
              className="hero-photo"
              src="/foto-perfil.jpg"
              alt="Fotografía de José Manuel"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />

            <div className="photo-fallback">
              <span>JM.</span>
              <small></small>
            </div>

            <span className="photo-label">DEVELOPER IN PROGRESS</span>
          </div>

          <div className="hero-sticker sticker-top">
            IDEAS
            <br />
            EN ACCIÓN
          </div>

          <div className="hero-sticker sticker-bottom">
            Código + creatividad ↗
          </div>

          {/* Conserva el avatar FBX, las animaciones y los objetos interactivos */}
          <div className="hero-scene" aria-label="Escena 3D interactiva">
            <Scene3D />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span><i className="status-dot" /> Explorando ideas, creando soluciones</span>
        <a href="#sobre-mi">DESCUBRE MI HISTORIA ↓</a>
      </div>
    </header>
  )
}
