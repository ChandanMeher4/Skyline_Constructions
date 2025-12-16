import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    location: '',
    category: 'Residential'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', formData);
      alert('Project Added Successfully!');
      setFormData({ title: '', description: '', imageUrl: '', location: '', category: 'Residential' });
    } catch (error) {
      console.error(error);
      alert('Error adding project');
    }
  };

  return (
    <div className="contact-page">
      <h2>Admin Panel: Add Project</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Project Title</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} required placeholder="https://..." />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} style={{width: '100%', padding: '10px'}}>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Renovation">Renovation</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default Admin;