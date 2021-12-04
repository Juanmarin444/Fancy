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
      <div className={styles.techSkills}>
        <header>
          <h2>{`Here's`} some technologies {`I've`} used</h2>
        </header>
        <div className={styles.alnCenter}>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/javascriptIcon.png' height="100px" width="100px"/>
              </div>
              <h3>JavaScript</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/reactIcon.png' height="100px" width="100px"/>
              </div>
              <h3>React</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/reduxIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Redux</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/nodejsIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Node.js</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/djangoIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Django</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/flaskIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Flask</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/sqliteIcon.png' height="100px" width="100px"/>
              </div>
              <h3>SQLite</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/mongodbIcon.png' height="100px" width="100px"/>
              </div>
              <h3>mongoDB</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/nextjsIcon.svg' height="100px" width="100px"/>
              </div>
              <h3>Next</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/swiftIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Swift</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/pugIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Pug</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/sassIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Sass</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/gitIcon.png' height="100px" width="100px"/>
              </div>
              <h3>Git</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/htmlIcon.png' height="100px" width="100px"/>
              </div>
              <h3>HTML</h3>
            </section>
          </div>
          <div className={styles.tech}>
            <section className={styles.techInfo}>
              <div className={styles.icon}>
                <Image className={styles.techIcon} alt={'temp alt'} src='/assets/cssIcon.png' height="100px" width="100px"/>
              </div>
              <h3>CSS</h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
