import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1 className="banner-font">Telisach Investments Ltd</h1>
      <div className="nav-links">
        <Link to="/"><i className="fas fa-home"></i> Home</Link>
        <Link to="/about"><i className="fas fa-info-circle"></i> About</Link>
        <Link to="/products"><i className="fas fa-box"></i> Products</Link>
        <Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link>
        <Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
        <Link to="/signup"><i className="fas fa-user-plus"></i> Sign Up</Link>
      </div>
    </nav>
  );
}
