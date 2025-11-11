export default function Home() {
  return (
    <section className="text-center">
      <h2 className="banner-font">Welcome to Telisach Investments Ltd</h2>
      <p style={{ maxWidth: '900px', margin: '0 auto 2rem' }}>
        Your premier partner for quality construction materials in Uganda. With over 15 years of excellence, 
        we supply premium cement, bricks, iron sheets, and sand to builders, contractors, and homeowners 
        across Kampala and beyond. Our commitment to quality and reliability has made us the trusted choice 
        for countless successful construction projects.
      </p>
      
      <div className="grid grid-cols-3" style={{ maxWidth: '1200px', margin: '0 auto 3rem' }}>
        <div className="card">
          <h3><i className="fas fa-award"></i> Quality Materials</h3>
          <p>Only the finest construction materials that meet international standards</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-truck"></i> Fast Delivery</h3>
          <p>Prompt delivery service to your construction site anywhere in Uganda</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-tag"></i> Competitive Prices</h3>
          <p>Best market rates without compromising on quality</p>
        </div>
      </div>
    </section>
  );
}
