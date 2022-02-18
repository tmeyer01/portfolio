import "./navmenu.scss";

export default function NavMenu({ navOpen, toggleNav }) {
  return (
    <div className={"navMenu " + (navOpen && "active")}>
      <div className="list--container">
        <ul>
          <li onClick={toggleNav}>
            <a href="#welcome">Home</a>
          </li>
          <li onClick={toggleNav}>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleNav}>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <ul>
          <li onClick={toggleNav}>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={toggleNav}>
            <a
              href="https://www.canva.com/design/DAEwBE504Vk/xNEYzY-ZtLBoGtA3jAhUVw/view?utm_content=DAEwBE504Vk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="hiden">
            blank
          </li>
        </ul>
      </div>
    </div>
  );
}
