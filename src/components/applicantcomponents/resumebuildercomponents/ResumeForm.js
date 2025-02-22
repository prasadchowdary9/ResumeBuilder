import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

 const ResumeForm = ({ data, onChange }) => {
  const updatePersonalInfo = (field, value) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: value,
      },
    });
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="h4">Personal Information</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={data.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Professional Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Professional Title"
              value={data.personalInfo.title}
              onChange={(e) => updatePersonalInfo('title', e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={data.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone"
              value={data.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Professional Summary</label>
            <textarea
              className="form-control"
              placeholder="Professional Summary"
              rows="3"
              value={data.personalInfo.summary}
              onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Example of adding an experience section */}
      <div className="mb-4">
        <h2 className="h4">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => {
                const newExperience = data.experience.filter((_, i) => i !== index);
                onChange({ ...data, experience: newExperience });
              }}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[index].company = e.target.value;
                  onChange({ ...data, experience: newExperience });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-control"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[index].position = e.target.value;
                  onChange({ ...data, experience: newExperience });
                }}
              />
            </div>
            {/* Add more fields as needed */}
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const newExperience = [
              ...data.experience,
              { company: '', position: '' /* Add other fields as needed */ },
            ];
            onChange({ ...data, experience: newExperience });
          }}
        >
          <FaPlus className="me-2" />
          Add Experience
        </button>
      </div>
      {/* Add more sections like Education, Skills, etc., following the same pattern */}
    </div>
  );
};


export default ResumeForm;