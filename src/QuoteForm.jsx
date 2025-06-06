import React, { useState } from 'react';
import './App.css';

function QuoteForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [material, setMaterial] = useState('');
  const [details, setDetails] = useState('');

    const handleQuoteRequest = () => {
    const recipient = "galaxylinktransport99@gmail.com";
    const subject = encodeURIComponent("Quote Request – Galaxy Link Transport");

    const body = encodeURIComponent(
        `Dear Galaxy Link Transport Team,\n\n` +
        `I would like to request a quote for materials and delivery.\n\n` +
        `Here are the details:\n` +
        `----------------------------------------\n` +
        `Full Name: ${name}\n` +
        `Phone Number: ${phone}\n` +
        `Material Needed: ${material}\n` +
        `\nProject Description:\n${details}\n` +
        `----------------------------------------\n\n` +
        `Please feel free to contact me if any additional information is required.\n\n` +
        `Best regards,\n${name}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };


  return (
    <div className="quote-form-container">
      <div className="quote-form">
        <h3 className="quote-form-title">Request Quote</h3>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Material Needed</label>
          <select
            className="form-input"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option>Select Material</option>
            <option>Play Sand & Inch and Half Black Granite</option>
            <option>River Rock</option>
            <option>Half Inch Limestone</option>
            <option>Red Creek Inch and Half</option>
            <option>Sod and Soil</option>
            <option>Mulch & Clean Fill</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Project Details</label>
          <textarea
            rows="4"
            className="form-input form-textarea"
            placeholder="Tell us more about your delivery!"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>

        <button
          onClick={handleQuoteRequest}
          className="btn btn-primary btn-full-width"
        >
          Request Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteForm;
