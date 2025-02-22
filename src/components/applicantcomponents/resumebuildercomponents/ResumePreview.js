import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const ResumePreview = ({ data }) => {
  const getSectionStyle = () => {
    const style = data.style?.sectionStyle || 'line';
    switch (style) {
      case 'box':
        return 'border border-2 p-4 rounded';
      case 'underline':
        return 'border-bottom border-2 pb-2 mb-4';
      case 'line':
      default:
        return 'border-top border-2 pt-2 mt-4';
    }
  };

  const primaryColor = data.style?.primaryColor || '#3B82F6';
  const sectionClass = `${getSectionStyle()} mb-4`;

  return (
    <div id="resume-preview" className="bg-white p-4 shadow h-100" style={{ color: primaryColor }}>
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-4 text-dark">{data.personalInfo.name}</h1>
        <p className="h5 text-secondary mt-2">{data.personalInfo.title}</p>
        <div className="d-flex justify-content-center gap-3 mt-3 text-secondary">
          {data.personalInfo.email && (
            <div className="d-flex align-items-center gap-1">
              <FiMail size={16} />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="d-flex align-items-center gap-1">
              <FiPhone size={16} />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="d-flex align-items-center gap-1">
              <FiMapPin size={16} />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Professional Summary</h2>
          <p className="text-dark">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <h3 className="h5 text-dark">{exp.position}</h3>
                <p className="text-secondary">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-dark fw-bold">{exp.company}</p>
              <p className="text-secondary mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <h3 className="h5 text-dark">{edu.degree}</h3>
                <p className="text-secondary">{edu.graduationDate}</p>
              </div>
              <p className="text-dark fw-bold">{edu.school}</p>
              <p className="text-secondary mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Skills</h2>
          <div className="d-flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-light text-dark"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Languages</h2>
          <div className="d-flex flex-wrap gap-2">
            {data.languages.map((language, index) => (
              <span
                key={index}
                className="badge bg-light text-dark"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Interests */}
      {data.interests?.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Interests</h2>
          <div className="d-flex flex-wrap gap-2">
            {data.interests.map((interest, index) => (
              <span
                key={index}
                className="badge bg-light text-dark"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {data.customSections?.map((section, index) => (
        <div key={index} className={sectionClass}>
          <h2 className="h4 text-dark mb-3">{section.title}</h2>
          <p className="text-dark">{section.content}</p>
        </div>
      ))}
    </div>
  );
};


export default ResumePreview;