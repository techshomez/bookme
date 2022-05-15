import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">
                Bookme.com
            </span>
            <div className="navItems">
                <button className="navButton">List your property</button>
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar