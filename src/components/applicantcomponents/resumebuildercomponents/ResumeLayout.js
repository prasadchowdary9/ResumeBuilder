import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import html2pdf from 'html2pdf.js';

const initialResumeData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
  interests: [],
  customSections: [],
  style: {
    primaryColor: '#3B82F6',
    fontFamily: 'Inter, sans-serif',
    sectionStyle: 'line' // 'line', 'box', 'underline'
  }
};

function ResumeLayout() {
  const [resumeData, setResumeData] = useState(initialResumeData);

//   const downloadPDF = () => {
//     const element = document.getElementById('resume-preview');
//     const opt = {
//       margin: 1,
//       filename: `${resumeData.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
//   };


const downloadPDF = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 1,
      filename: `${resumeData.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  };
  

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              {/* <FileText className="text-primary" size={24} /> */}
              <h1 className="text-xl font-bold text-dark">Resume Builder</h1>
            </div>
            <button
              onClick={downloadPDF}
              className="d-flex align-items-center gap-2 btn btn-primary"
            >
              {/* <Download size={20} /> */}
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="row">
          {/* Left Column - Form */}
          <div className="col-lg-6 mb-3">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="col-lg-6 mb-3">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResumeLayout;
