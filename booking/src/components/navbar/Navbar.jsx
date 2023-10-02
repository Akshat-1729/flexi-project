import "./navbar.css"

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Travigo</span>
        <div className="navItems">
          <button className="navButton" ><a href="/register">Register</a></button>
          <button className="navButton"><a href="/login">Login</a></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar