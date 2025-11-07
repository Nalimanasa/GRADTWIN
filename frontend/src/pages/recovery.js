import React, { useState } from 'react';

function Raw(){
  const [inquiry, setInquiry] = useState({ name: '', email: '', message: '' });

  const products = [
    { id: 1, name: 'Bauxite', category: 'Metal', price: '$120/ton', moq: '20 tons' },
    { id: 2, name: 'Alumina', category: 'Chemical', price: '$420/ton', moq: '5 tons' },
    { id: 3, name: 'Coconut Oil', category: 'Agricultural', price: '$950/ton', moq: '1 ton' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry submitted!');
    setInquiry({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ color: '#333' }}>Raw Materials Export</h1>

      <section>
        <h2>Available Products</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#fff',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: 'calc(33% - 20px)',
                marginBottom: '20px',
              }}
            >
              <h3>{product.name}</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <p><strong>MOQ:</strong> {product.moq}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={inquiry.name}
            onChange={handleInputChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={inquiry.email}
            onChange={handleInputChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={inquiry.message}
            onChange={handleInputChange}
            required
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              minHeight: '100px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}

export default Raw;
