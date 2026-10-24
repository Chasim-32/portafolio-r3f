
const projects = [
  {
    number: '01',
    name: 'EkoMart',
    category: 'Diseño y desarrollo web',
    description:
      'Propuesta de experiencia digital para una marca de moda, con exploración de tendencias visuales e interfaz.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    color: 'project-coral',

    url: 'https://genre-split-03445173.figma.site/',
  },
  {
    number: '02',
    name: 'IndiePlay',
    category: 'Proyecto académico',
    description:
      'Proyecto para practicar con react, es una aplicación web que permite explorar información de videojuegos y sus desarrolladores.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    color: 'project-lime',
    url: 'https://chasim-32.github.io/indieplay/',
  },

]

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-intro">
        <span className="section-kicker">02 / MI TRABAJO</span>

        <h2>
          Ideas que
          <br />
          toman <span>forma.</span>
        </h2>

        <p>
          Una selección de proyectos académicos y experimentos
          donde convierto conceptos en soluciones.
        </p>

        <div className="projects-counter">
          <span>02</span>
          <small>PROYECTOS<br />DESTACADOS</small>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.color} project-card-${index + 1}`}
            key={project.number}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>

            <div className="project-art" aria-hidden="true">
              {index === 0 && (
                <div className="art-fashion">
                  <span>EK</span>
                  <i />
                  <b>STYLE<br />YOUR<br />WORLD.</b>
                </div>
              )}

              {index === 1 && (
                <div className="art-library">
                  <span>LIB</span>
                  <i />
                  <i />
                  <i />
                </div>
              )}

              {index === 2 && (
                <div className="art-sinfilas">
                  <span>+</span>
                  <b>SinFilas</b>
                  <small>MENOS ESPERA.</small>
                </div>
              )}
            </div>

            <div className="project-card-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Ver proyecto <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
