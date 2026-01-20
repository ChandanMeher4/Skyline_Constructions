import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    location: '',
    category: 'Residential',
    companyName: '',
    companyEmail: '',
    priceRange: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1234') {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Code! Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', formData);
      
      alert('Project Listed Successfully!');
      
      setFormData({ 
        title: '', description: '', imageUrl: '', location: '', 
        category: 'Residential', companyName: '', companyEmail: '', priceRange: '' 
      });
    } catch (error) {
      console.error(error);
      alert('Error listing project. Check console for details.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="contact-page" style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Restricted Access</h2>
        <p>This area is for verified companies only.</p>
        <p>Please enter the passcode to list a project.</p>
        
        <form onSubmit={handleLogin} style={{maxWidth: '300px', margin: '20px auto', display:'flex', flexDirection:'column', gap:'10px'}}>
          <input 
            type="password" 
            placeholder="Enter Passcode" 
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            style={{padding: '12px', borderRadius: '5px', border: '1px solid #ccc'}}
          />
          <button type="submit" style={{padding: '10px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
            Enter Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <h2>List Your Project</h2>
      <p style={{marginBottom: '20px'}}>Complete the details below to publish your project to the directory.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        
        <div className="form-group" style={{background: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #ddd'}}>
            <h3 style={{marginTop: 0, fontSize: '1.1rem', color: '#333', borderBottom:'1px solid #ccc', paddingBottom:'10px', marginBottom:'15px'}}>🏢 Company Details</h3>
            
            <label>Company Name <span style={{color:'red'}}>*</span></label>
            <input name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="e.g. Skyline Builders" />
            
            <label style={{marginTop: '10px', display:'block'}}>Contact Email</label>
            <input name="companyEmail" value={formData.companyEmail} onChange={handleChange} placeholder="contact@company.com" />
        </div>

        <div className="form-group">
          <label>Project Title <span style={{color:'red'}}>*</span></label>
          <input name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Modern Villa" />
        </div>

        <div className="form-group">
          <label>Image URL <span style={{color:'red'}}>*</span></label>
          <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} required placeholder="https://example.com/image.jpg" />
        </div>
        
        <div className="form-group" style={{display:'flex', gap:'15px'}}>
            <div style={{flex: 1}}>
                <label>Location</label>
                <input name="location" value={formData.location} onChange={handleChange} placeholder="City, Country" />
            </div>
            <div style={{flex: 1}}>
                <label>Price Range</label>
                <input name="priceRange" value={formData.priceRange} onChange={handleChange} placeholder="e.g. ₹50L - ₹60L" />
            </div>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} style={{width: '100%', padding: '12px', borderRadius:'5px', border:'1px solid #ccc'}}>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Renovation">Renovation</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description <span style={{color:'red'}}>*</span></label>
          <textarea name="description" value={formData.description} onChange={handleChange} required rows="5" placeholder="Describe the project..." />
        </div>

        <button type="submit" style={{width: '100%', padding: '15px', fontSize: '1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px'}}>
          Publish Listing
        </button>
      </form>
    </div>
  );
};

export default Admin;
