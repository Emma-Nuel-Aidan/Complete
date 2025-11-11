export default function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card text-center">
        <h2>Contact Us</h2>
        
        <div style={{ margin: '2rem 0' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '0.5rem' }}></i>
            <h3>Address</h3>
            <p>Plot 1234, Industrial Area<br />Kampala, Uganda</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <i className="fas fa-phone" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '0.5rem' }}></i>
            <h3>Phone</h3>
            <p>+256 700 123 456<br />+256 772 987 654</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <i className="fas fa-envelope" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '0.5rem' }}></i>
            <h3>Email</h3>
            <p>info@telisach.co.ug<br />sales@telisach.co.ug</p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <i className="fas fa-clock" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '0.5rem' }}></i>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
          <h3 style={{ marginBottom: '1rem' }}>Follow Us</h3>
          <div style={{ fontSize: '1.5rem', gap: '1rem', display: 'flex', justifyContent: 'center' }}>
            <a href="#" style={{ color: '#1e3a8a' }}><i className="fab fa-facebook"></i></a>
            <a href="#" style={{ color: '#1e3a8a' }}><i className="fab fa-twitter"></i></a>
            <a href="#" style={{ color: '#1e3a8a' }}><i className="fab fa-instagram"></i></a>
            <a href="#" style={{ color: '#1e3a8a' }}><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
