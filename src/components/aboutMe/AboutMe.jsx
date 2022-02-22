import './aboutme.scss'

export default function AboutMe() {
  return (
    <div className="aboutMe" id="about">
<div className="left">
        <div className="about--wrapper">
          <h2>About me</h2>
          <p>
            I'm a full-stack web developer from Vancouver, BC. I'm always looking
            to further enhance my skills while being an asset to your team. I'm
            passionate about creating innovative and easy-to-use websites and
            applications that help empower and make life easier for users. When
             not coding I'm usually training for some kind of bicycle related
            ultra-endurance race.
          </p>


        </div>
          <a href="#projects" className="downArrowLeft">
          <img src="/images/icons/colorarrow.png" alt="icondown" />
          </a>
      </div>

      <div className="right">
        <div className="about--languages--libraries">
          
          
          
          <span className="languages">
            <h2>Languages</h2>
            <p> JavaScript, HTML5, CSS, Ruby and SQL</p>
          </span>

          <span className="libraries">
            <h2>Libraries and Frameworks</h2>
            <p>
              React, NodeJS, Express, Rails, jQuery, Ajax, MaterialUI, Babel,
              ActiveRecord, PSQL
            </p>
          </span>

          <span className="other">
            <h2>Other</h2>
            <p>
              Relational Databases- PostgreSQL, Non-Relation Databases -
              MongoDB, Git, GitHub, Websockets, Adobe Photoshop, Adobe Lightroom
            </p>
          </span>
        </div>

        <a href="#projects" className="downArrowRight">
          <img src="./images/icons/colorarrow.png" alt="icondown" />
        </a>
      </div>
    </div>
  )
}
