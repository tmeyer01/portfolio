import "./welcome.scss";
import downarrow from '../../images/colorarrow.png'

export default function Welcome() {
  return (
    <div className="welcome" id="welcome">
      <div className="container">
        <div className="name--title--wrapper">
          <p>
            Hello world <span className="blink">.</span>
          </p>
          <h1>I'm Thomas Meyer,</h1>
          <h3 className="title"> Full stack web developer</h3>
        </div>

        <a href="#about" className="downArrow">
          <img src={downarrow} alt="icondown" />
        </a>
      </div>
    </div>
  );
}
