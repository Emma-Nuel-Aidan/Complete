import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  // Basic Materials
  { id: 1, name: "Cement (50kg)", price: 32000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 2, name: "Bricks (per 100)", price: 45000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 3, name: "Iron Sheets", price: 60000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 4, name: "Sand (1 Trip)", price: 120000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 5, name: "Gravel (1 Trip)", price: 100000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 6, name: "Limestone", price: 85000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 7, name: "Concrete Blocks", price: 55000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 8, name: "Steel Rods (12mm)", price: 75000, category: "Basic", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  
  // Modern Materials
  { id: 9, name: "Fiberglass Insulation", price: 95000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 10, name: "Solar Panels", price: 450000, category: "Modern", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=60" },
  { id: 11, name: "Smart Glass", price: 320000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 12, name: "Composite Decking", price: 180000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 13, name: "LED Lighting Systems", price: 125000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 14, name: "Waterproof Membrane", price: 110000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 15, name: "Thermal Insulation Foam", price: 135000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 16, name: "Recycled Plastic Lumber", price: 165000, category: "Modern", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  
  // Tools
  { id: 17, name: "Power Drill Set", price: 85000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 18, name: "Circular Saw", price: 120000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 19, name: "Angle Grinder", price: 95000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 20, name: "Laser Level", price: 145000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 21, name: "Concrete Mixer", price: 380000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 22, name: "Nail Gun", price: 110000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 23, name: "Pressure Washer", price: 165000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 24, name: "Tile Cutter", price: 95000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 25, name: "Paint Sprayer", price: 125000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  { id: 26, name: "Welding Machine", price: 285000, category: "Tools", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=60" },
  
  // Smart Home
  { id: 27, name: "Smart Thermostat", price: 185000, category: "Smart" },
  { id: 28, name: "Security Camera System", price: 320000, category: "Smart" },
  { id: 29, name: "Smart Lock System", price: 145000, category: "Smart" },
  { id: 30, name: "Automated Blinds", price: 225000, category: "Smart" },
  { id: 31, name: "Smart Lighting Hub", price: 165000, category: "Smart" },
  { id: 32, name: "Water Leak Detectors", price: 95000, category: "Smart" },
  
  // Sustainable
  { id: 33, name: "Rainwater Harvesting System", price: 450000, category: "Sustainable" },
  { id: 34, name: "Green Roof Materials", price: 280000, category: "Sustainable" },
  { id: 35, name: "Bamboo Flooring", price: 195000, category: "Sustainable" },
  { id: 36, name: "Low-E Windows", price: 385000, category: "Sustainable" },
  { id: 37, name: "Recycled Steel", price: 165000, category: "Sustainable" },
  { id: 38, name: "Hempcrete Blocks", price: 125000, category: "Sustainable" },
  
  // Safety Equipment
  { id: 39, name: "Hard Hats", price: 25000, category: "Safety" },
  { id: 40, name: "Safety Harness", price: 45000, category: "Safety" },
  { id: 41, name: "First Aid Kit", price: 35000, category: "Safety" },
  { id: 42, name: "Fire Extinguisher", price: 55000, category: "Safety" },
  { id: 43, name: "Safety Glasses", price: 15000, category: "Safety" },
  { id: 44, name: "Work Gloves", price: 12000, category: "Safety" },
];

export default function Products() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const addToCart = (p: any) => setCart([...cart, p]);
  const total = cart.reduce((sum: number, p: any) => sum + p.price, 0);
  
  const categories = [
    { name: "All", icon: "fas fa-th" },
    { name: "Basic", icon: "fas fa-cube" },
    { name: "Modern", icon: "fas fa-microchip" },
    { name: "Tools", icon: "fas fa-tools" },
    { name: "Smart", icon: "fas fa-home" },
    { name: "Sustainable", icon: "fas fa-leaf" },
    { name: "Safety", icon: "fas fa-hard-hat" }
  ];
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <h2 className="text-center mb-6">Building Materials & Tools</h2>
      
      {/* Category Filter */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className="btn btn-primary"
            style={{
              margin: '0.25rem',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              backgroundColor: selectedCategory === category.name ? '#1e3a8a' : '#6b7280'
            }}
          >
            <i className={category.icon} style={{ marginRight: '0.5rem' }}></i>
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4">
        {filteredProducts.map((p) => (
          <div key={p.id} className="card text-center">
            <img 
              src={p.image} 
              alt={p.name}
              style={{ 
                width: '100%', 
                height: '120px', 
                objectFit: 'cover', 
                borderRadius: '0.5rem',
                marginBottom: '0.75rem'
              }}
            />
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#6b7280', 
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}>
              {p.category}
            </div>
            <h3 style={{ fontSize: '0.85rem', marginBottom: '0.5rem', minHeight: '2rem' }}>{p.name}</h3>
            <p style={{ fontWeight: '700', color: '#1e3a8a', fontSize: '0.9rem' }}>
              UGX {p.price.toLocaleString()}
            </p>
            <button
              onClick={() => addToCart(p)}
              className="btn btn-primary"
              style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="card text-center" style={{ marginTop: '2.5rem' }}>
          <h3>Shopping Cart ({cart.length} items)</h3>
          {cart.map((c: any, i: number) => (
            <p key={i}>{c.name} - UGX {c.price.toLocaleString()}</p>
          ))}
          <h4 style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
            Total: UGX {total.toLocaleString()}
          </h4>
          <Link to="/checkout" className="btn btn-success" style={{ marginTop: '1rem' }}>
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
