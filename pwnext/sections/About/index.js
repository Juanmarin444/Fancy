import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import myAvatar from '../../public/myAvatar.svg'

const About = () => {
  return (
    <div className={`${styles.section} ${styles.about}`}>
      <h1>WHO IS THIS GUY?</h1>
      <div className={styles.avatar}>
        <Image src={myAvatar} alt={"My avatar"} />
      </div>
      <div className={styles.info}>
        <h2>If {`you're`} searching for someone with a curious mind and approaches difficulties</h2>
        <h2>with a positive attitude, {`you've`} come to the right place.</h2>
        <br />
        <br />
        <p>{`I'm`} a web developer with experience in a few web frameworks.</p>
        <p>{`I've`} honed my skills working with small groups to produce remarkable things.</p>
        <p>My goal is to join a team where I can help make the internet a more enjoyable place.</p>
      </div>
    </div>
  )
}

export default About
