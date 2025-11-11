import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  const emailProviders = [
    { name: "Google", icon: "fab fa-google", url: "https://accounts.google.com/signup" },
    { name: "Outlook", icon: "fab fa-microsoft", url: "https://signup.live.com/" },
    { name: "Yahoo", icon: "fab fa-yahoo", url: "https://login.yahoo.com/account/create" },
    { name: "ProtonMail", icon: "fas fa-shield-alt", url: "https://proton.me/mail/signup" },
    { name: "Hotmail", icon: "fas fa-sun", url: "https://signup.live.com/" },
    { name: "iCloud", icon: "fab fa-apple", url: "https://www.icloud.com/" },
    { name: "Zoho", icon: "fas fa-briefcase", url: "https://www.zoho.com/mail/" }
  ];

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <div className="card">
        <h2 className="text-center mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              minLength={8}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              minLength={8}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Create Account
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Or create an email account with:</p>
          
          <div className="grid grid-cols-4" style={{ gap: '0.75rem', marginBottom: '1.5rem' }}>
            {emailProviders.map((provider) => (
              <a
                key={provider.name}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card text-center"
                style={{ 
                  padding: '1rem 0.5rem', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: '#1e3a8a' }}>
                  <i className={provider.icon}></i>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#1f2937' }}>
                  {provider.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ color: '#6b7280' }}>
            Already have an account? <Link to="/login" style={{ color: '#1e3a8a', fontWeight: '600' }}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}