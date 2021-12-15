const Project = ({image, name, description, url, github}) => {
  return (
    <div className="project">
      <img src={image} alt={name} />
      <div className="projectInfo">
        <h2 className="projectName">{name}</h2>
        <h3 className="projectDescription">{description}</h3>
        <div className="projectButtons">
          <a href={url} className="projectButton" target="_blank" rel="noreferrer">Website</a>
          <a href={github} className="projectButton" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Project
