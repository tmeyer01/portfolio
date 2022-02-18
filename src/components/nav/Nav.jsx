import "./nav.scss"

export default function Nav({ navOpen, toggleNav}) {
  return (
    <div className={"nav " + (navOpen && "active")}>
      <div className="wrapper">
        <div className="hamburger" onClick={toggleNav}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
    </div>
  )
}
