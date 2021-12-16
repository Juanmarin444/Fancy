import myAvatar from '../../assets/myAvatar.svg'
import Tech from '../../components/Tech.js'
import icons from '../../assets/techSkills'

const About = () => {

  return (
    <section className="section about">
      <h1>WHO IS THIS GUY?</h1>
      <div className="avatar">
        <img className="myAvatar" src={myAvatar} alt={"My avatar"} />
      </div>
      <div className="info">
        <div className="infoText">
          <h2>If {`you're`} searching for someone with a curious mind and approaches difficulties</h2>
          <h2>with a positive attitude, {`you've`} come to the right place.</h2>
        </div>
        <div className="infoText">
          <p>{`I'm`} a web developer with experience in a few web frameworks.</p>
          <p>{`I've`} honed my skills working with small groups to produce remarkable things.</p>
          <p>My goal is to join a team where I can help make the internet a more enjoyable place.</p>
        </div>
      </div>
      <div className="skills">
        <header>
          <h2>{`Here's`} some technologies {`I've`} used</h2>
        </header>
        <div className="alnCenter">
          <Tech name="JavaScript" src={icons.js} />
          <Tech name="React" src={icons.react} />
          <Tech name="Redux" src={icons.redux} />
          <Tech name="Node.js" src={icons.node} />
          <Tech name="Django" src={icons.django} />
          <Tech name="Flask" src={icons.flask} />
          <Tech name="SQLite" src={icons.sqlite} />
          <Tech name="MongoDB" src={icons.mongoDb} />
          <Tech name="Next" src={icons.next} />
          <Tech name="Pug" src={icons.pug} />
          <Tech name="Sass" src={icons.sass} />
          <Tech name="Swift" src={icons.swift} />
          <Tech name="Git" src={icons.git} />
          <Tech name="HTML" src={icons.html} />
          <Tech name="CSS" src={icons.css} />
        </div>
      </div>
    </section>
  )
}

export default About
