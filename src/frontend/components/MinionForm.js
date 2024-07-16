import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMinion } from '../store/minionsSlice';
import PropTypes from 'prop-types';
import './MinionDetail.css';  // Import the CSS file to ensure styles are applied

const MinionForm = ({ onCancel, formData: initialData, onSubmit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData || {
    name: '',
    title: '',
    salary: '',
    weaknesses: ''
  });

  useEffect(() => {
    setFormData(initialData || {
      name: '',
      title: '',
      salary: '',
      weaknesses: ''
    });
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      dispatch(addMinion(formData));
      onCancel();
    }
  };

  return (
    <div className='minion-form-container'>
      <h2 className='form-heading'>{initialData ? 'Edit Minion' : 'New Minion'}</h2>
      <form onSubmit={handleSubmit} className='minion-form'>
        <label className='form-label'>
          Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange} className='form-input' />
        </label>
        <label className='form-label'>
          Title:
          <input type='text' name='title' value={formData.title} onChange={handleChange} className='form-input' />
        </label>
        <label className='form-label'>
          Salary:
          <input type='number' name='salary' value={formData.salary} onChange={handleChange} className='form-input' />
        </label>
        <label className='form-label'>
          Weaknesses:
          <textarea name='weaknesses' value={formData.weaknesses} onChange={handleChange} className='form-textarea'></textarea>
        </label>
        <div className='form-buttons'>
          <button type='button' onClick={onCancel} className='cancel-button'>Cancel</button>
          <button type='submit' className='save-button'>Save</button>
        </div>
      </form>
    </div>
  );
};

MinionForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  formData: PropTypes.object,
  onSubmit: PropTypes.func
};

export default MinionForm;
