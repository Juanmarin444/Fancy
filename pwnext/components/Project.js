import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Project = ({image, name, description, url, github}) => {
  return (
    <div className={styles.project}>
      <Image src={image} alt={name} />
      <div className={styles.projectInfo}>
        <p className={styles.projectName}>{name}</p>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectButtons}>
          <a href={url} className={styles.projectButton} target="_blank" rel="noreferrer">Website</a>
          <a href={github} className={styles.projectButton} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Project
