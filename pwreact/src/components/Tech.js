const Tech = ({name, src}) => {

  return (
    <div className="tech">
      <section className="techInfo">
        <div className="techIcon">
          <img alt={name} src={src} height="100px" width="100px"/>
        </div>
        <h3>{name}</h3>
      </section>
    </div>
  )
}

export default Tech
