export default function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h2 className="text-center mb-8">About Telisach Investments Ltd</h2>
      
      <div className="card mb-8">
        <h3>Our Story</h3>
        <p>
          Founded in 2008, Telisach Investments Ltd began as a small family business with a big vision: 
          to provide Uganda's construction industry with reliable, high-quality building materials. 
          From our humble beginnings in Kampala, we've grown to become one of the most trusted suppliers 
          in the region.
        </p>
        <p>
          Today, we serve thousands of customers - from individual homeowners building their dream homes 
          to large construction companies developing commercial properties. Our success is built on 
          unwavering commitment to quality, integrity, and customer satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To empower Uganda's development by providing premium construction materials that ensure 
            lasting, safe, and beautiful structures for generations to come.
          </p>
        </div>
        
        <div className="card">
          <h3>Our Values</h3>
          <ul>
            <li>• Quality in every product</li>
            <li>• Integrity in all dealings</li>
            <li>• Customer-first approach</li>
            <li>• Sustainable business practices</li>
          </ul>
        </div>
      </div>

      <div className="card text-center" style={{ backgroundColor: '#eff6ff' }}>
        <h3>Why Choose Us?</h3>
        <p>
          With over 15 years of experience, certified quality materials, and a team dedicated to your success, 
          Telisach Investments Ltd is your partner in building Uganda's future.
        </p>
      </div>
    </div>
  );
}
