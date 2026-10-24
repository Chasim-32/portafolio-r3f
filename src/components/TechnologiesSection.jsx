
const technologies = [
  { name: 'HTML5', level: 'Web', symbol: '5', color: 'tech-html' },
  { name: 'CSS3', level: 'Web', symbol: '3', color: 'tech-css' },
  { name: 'JavaScript', level: 'Web', symbol: 'JS', color: 'tech-js' },
  { name: 'React', level: 'Frontend', symbol: 'R', color: 'tech-react' },
  { name: 'Python', level: 'Programación', symbol: 'Py', color: 'tech-python' },
  { name: 'Java', level: 'Programación', symbol: 'J', color: 'tech-java' },
  { name: 'SQL', level: 'Bases de datos', symbol: 'DB', color: 'tech-sql' },
  { name: 'Git / GitHub', level: 'Herramientas', symbol: 'GH', color: 'tech-git' },
]

export default function TechnologiesSection() {
  return (
    <section className="technologies-section" id="tecnologias">
      <div className="tech-heading">
        <span className="section-kicker">03 / MI CAJA DE HERRAMIENTAS</span>

        <h2>
          Tecnologías para
          <br />
          <span>construir ideas.</span>
        </h2>

        <p>
          Herramientas que he utilizado en proyectos académicos
          y que sigo fortaleciendo a través de la práctica.
        </p>
      </div>

      <div className="tech-grid">
        {technologies.map((technology, index) => (
          <article
            className={`tech-card ${technology.color} tech-card-${index + 1}`}
            key={technology.name}
          >
            <div className="tech-symbol" aria-hidden="true">
              {technology.symbol}
            </div>

            <div className="tech-info">
              <h3>{technology.name}</h3>
              <span>{technology.level}</span>
            </div>

            <span className="tech-index">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </article>
        ))}
      </div>

      <div className="tech-footer">
        <span>APRENDER → PRACTICAR → CONSTRUIR</span>
        <span>EN CONSTANTE EVOLUCIÓN ↗</span>
      </div>
    </section>
  )
}
