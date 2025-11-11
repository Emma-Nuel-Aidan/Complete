import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    localStorage.setItem("user", email);
    setUser(email);
    navigate("/products");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  if (user) {
    return (
      <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
        <div className="card text-center">
          <h2>Welcome Back!</h2>
          <p style={{ fontSize: '1.125rem', margin: '1rem 0' }}>Logged in as: <strong>{user}</strong></p>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
            You now have access to exclusive pricing and faster checkout.
          </p>
          <button onClick={logout} className="btn btn-primary" style={{ backgroundColor: '#dc2626' }}>
            Logout
          </button>
          <Link to="/products" className="btn btn-success" style={{ marginLeft: '1rem' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <div className="card">
        <h2 className="text-center mb-6">Sign In</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button onClick={handleLogin} className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
          Sign In
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Link to="/forgot-password" style={{ color: '#1e3a8a', fontSize: '0.875rem' }}>
            Forgot your password?
          </Link>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#1e3a8a', fontWeight: '600' }}>Sign Up</Link>
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            New to Telisach? Create an account to access exclusive deals and faster checkout.
          </p>
        </div>
      </div>
    </div>
  );
}