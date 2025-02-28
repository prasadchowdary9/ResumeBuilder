// import React, { useState } from 'react';
// import ResumeForm from './ResumeForm';
// import ResumePreview from './ResumePreview';
// import html2pdf from 'html2pdf.js';
// import logos from '../../../images/logofinal.png';

// const initialResumeData = {
//   personalInfo: {
//     name: '',
//     title: '',
//     email: '',
//     phone: '',
//     location: '',
//     summary: ''
//   },
//   experience: [],
//   education: [],
//   skills: [],
//   projects: [],
//   certifications: [],
//   languages: [],
//   interests: [],

//   customSections: [],
//   style: {
//     primaryColor: '#3B82F6',
//     fontFamily: 'Inter, sans-serif',
//     sectionStyle: 'line' // 'line', 'box', 'underline'
//   }
// };

// function ResumeLayout() {
//   const [resumeData, setResumeData] = useState(initialResumeData);

// //     const element = document.getElementById('resume-preview');
// //     const opt = {
// //       margin: 1,
// //       filename: `${resumeData.personalInfo.name.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
// //       image: { type: 'jpeg', quality: 0.98 },
// //       html2canvas: { scale: 2 },
// //       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
// //     };

// //     html2pdf().set(opt).from(element).save();
// //   };


// const downloadPDF = () => {
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
  

//   return (
  

//   <div className="min-vh-100 bg-light">
//   {/* Header */}
//   <header className="bg-white shadow-sm py-3">
//     <div className="container d-flex justify-content-between align-items-center">
//       <div className="d-flex align-items-center gap-2">
//       <div id="logo" className="logo">
//                     <a href="/applicanthome">
//                       <img
//                         className="site-logo"
                       
//                         src={logos}
//                         alt="Image"
//                       />
//                     </a>
                    
//                   </div>   
//                      </div>
//       <button
//         onClick={downloadPDF}
//         className="btn btn-primary ms-auto d-flex align-items-center gap-2"
//       >
//         Download PDF
//       </button>
//     </div>
//   </header>

//   {/* Main Content */}
//   <main className="container py-4">
//     <div className="row justify-content-center">
//       {/* Left Column - Form */}
//       <div className="col-lg-5 mb-3">
//         <div className="bg-white rounded-lg p-3 shadow-sm">
//           <ResumeForm data={resumeData} onChange={setResumeData} />
//         </div>
//       </div>

//       {/* Right Column - Preview */}
//       <div className="col-lg-5 mb-3">
//         <div className="bg-white rounded-lg p-3 shadow-sm">
//           <ResumePreview data={resumeData} />
//         </div>
//       </div>
//     </div>
//   </main>
// </div>
// );
// }

// export default ResumeLayout;




// import React, { useState } from 'react';
// import ResumeForm from './ResumeForm';
// import ResumePreview from './ResumePreview';
// import html2pdf from 'html2pdf.js';
// import logos from '../../../images/logofinal.png';

// const initialResumeData = {
//   personalInfo: {
//     name: '',
//     title: '',
//     email: '',
//     phone: '',
//     location: '',
//     summary: ''
//   },
//   experience: [],
//   education: [],
//   skills: [],
//   projects: [],
//   certifications: [],
//   languages: [],
//   interests: [],
//   customSections: [],
//   style: {
//     primaryColor: '#3B82F6',
//     fontFamily: 'Inter, sans-serif',
//     sectionStyle: 'line' // 'line', 'box', 'underline'
//   }
// };

// function ResumeLayout() {
//   const [resumeData, setResumeData] = useState(initialResumeData);

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

//   return (
//     <div className="min-vh-100 bg-light">
//       {/* Header */}
//       <header className="bg-white shadow-sm py-3">
//         <div className="container d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center gap-2">
//             <div id="logo" className="logo">
//               <a href="/applicanthome">
//                 <img className="site-logo" src={logos} alt="Logo" />
//               </a>
//             </div>
//           </div>
//           <button
//             onClick={downloadPDF}
//             className="btn btn-primary ms-auto d-flex align-items-center gap-2"
//           >
//             Download PDF
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className=" py-4">
//         <div className="row justify-content-center align-items-start">
//           {/* Left Column - Form */}
//           <div className="col-lg-6 mb-3">
//             <div className="bg-white rounded-lg p-3 shadow-sm h-100">
//               <ResumeForm data={resumeData} onChange={setResumeData} />
//             </div>
//           </div>

//           {/* Right Column - Preview */}
//           {/* <div className="col-lg-6 mb-3">
//             <div className="bg-white rounded-lg p-3 shadow-sm h-100">
//               <ResumePreview data={resumeData} />
//             </div>
//           </div> */}

          
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ResumeLayout;



import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import html2pdf from 'html2pdf.js';
import logos from '../../../images/logofinal.png';

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
  projects: [],
  certifications: [],
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
      <header className="bg-white shadow-sm py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <div id="logo" className="logo">
              <a href="/applicanthome">
                <img className="site-logo" src={logos} alt="Logo" />
              </a>
            </div>
          </div>
          <button
            onClick={downloadPDF}
            className="btn btn-primary ms-auto d-flex align-items-center gap-2"
          >
            Download PDF
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-4">
        <div className="row justify-content-center align-items-start">
          {/* Left Column - Form */}
          <div className="col-lg-6 mb-3">
            <div
              className="bg-white rounded-lg p-3 shadow-sm h-100 overflow-auto"
              style={{ maxHeight: '80vh' }}
            >
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="col-lg-6 mb-3">
            <div className="bg-white rounded-lg p-3 shadow-sm h-100 overflow-auto"
              style={{ maxHeight: '80vh' }}
            >
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResumeLayout;
