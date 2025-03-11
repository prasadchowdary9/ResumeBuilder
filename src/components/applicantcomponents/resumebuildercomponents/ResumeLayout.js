


import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import html2pdf from "html2pdf.js";
import axios from "axios";
import logos from '../../../images/logofinal.png';
import { useNavigate } from "react-router-dom";
import  {useUserContext} from "../../common/UserProvider"
import { Toast, ToastContainer } from "react-bootstrap";
import { apiUrl } from '../../../services/ApplicantAPIService';
import "./ResumePreview.css"
const initialResumeData = {
  resumePersonalInfo: {
    fullName: '',
    title: '',
    email: '',
    phoneNo: '',
    location: '',
    summary: ''
  },
  resumeExperiences: [
    {
      company:"",
      description:"",
      endDate:"",
      jobTitle:"",
      startDate:"",
    }
  ],
  resumeEducations: [

    {
      cgpa:" " ,
      college:"",
      endYear: " ",
      standard: "",
      startYear: "",
    }
  ],
  resumeSkills: { technicalSkills: [] },
  resumeProjects: [
    {
      title: "",
      description: "",
      startDate: "",
      endDate: "Present",
      link: "",
    }
  ],  
  resumeCertificates: [  // Added resumeCertificates here
    {
      title: "",
      issuedBy: "",
      year: "",
    }
  ],
  resumeLanguages: [
    { languageName: "" }
  ],  resumeIntrest: { intrests: [""] },  customSections: [],
  style: {
    primaryColor: '#3B82F6',
    fontFamily: 'Inter, sans-serif',
    sectionStyle: 'line' // 'line', 'box', 'underline'
  }
};

function ResumeLayout() {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const navigate = useNavigate(); // Use navigation for redirecting
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success"); // success or danger

  const user = useUserContext().user;
  const handleSaveOrUpload = async () => {
    try {
      console.log("Starting Resume Save & Upload...");
  
      if (!resumeData || !resumeData.resumePersonalInfo || !resumeData.resumePersonalInfo.fullName) {
        console.error("Missing personal details!");
        setToastMessage("Please fill in your personal details before saving.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }
  
      const fileName = `${resumeData.resumePersonalInfo.fullName.toLowerCase().replace(/\s+/g, "_")}_resume.pdf`;
      const element = document.getElementById("resume-preview");
  
      if (!element) {
        console.error("Resume preview element not found!");
        return;
      }
  
      console.log("Generating PDF...");
      
      const pdfBlob = await html2pdf().from(element).outputPdf("blob");
  
      if (!pdfBlob) {
        console.error("PDF generation failed!");
        return;
      }
  
      console.log("PDF Generated Successfully:", pdfBlob);
  
      const formData = new FormData();
      const pdfFile = new File([pdfBlob], fileName, { type: "application/pdf" });
      formData.append("resume", pdfFile);
  
      const jwtToken = localStorage.getItem("jwtToken");
  
      if (!jwtToken) {
        console.error("Missing JWT Token!");
        setToastMessage("User authentication failed. Please log in again.");
        setToastVariant("danger");
        setShowToast(true);
        return;
      }
  
      console.log("Uploading PDF to Server...");
  
      const response = await fetch(`http://192.168.86.235:8081/resume/upload/${user.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formData, // FormData ensures correct content type
      });
  
      console.log("Server Response:", response);
  
      const responseText = await response.text();
      console.log("Server Response Text:", responseText);
  
      if (response.ok) {
        console.log("Resume uploaded successfully!");
        setToastMessage("Resume uploaded successfully!");
        setToastVariant("success");
        setShowToast(true);
      } else {
        console.error("Upload Failed:", responseText);
        setToastMessage("Failed to upload resume: " + responseText);
        setToastVariant("danger");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Error in Save & Upload:", error);
      setToastMessage("Error uploading resume.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  // const handleDownloadPDF = async () => {
  //   if (!resumeData.resumePersonalInfo || !resumeData.resumePersonalInfo.fullName) {
  //     alert("Please fill in your personal details before downloading.");
  //     return;
  //   }
  
  //   const fileName = `${resumeData.resumePersonalInfo.fullName.toLowerCase().replace(/\s+/g, "_")}_resume.pdf`;
  
  //   const element = document.getElementById("resume-preview");
  
  //   if (!element) {
  //     alert("Resume preview not found. Please try again.");
  //     return;
  //   }
  
  //   const opt = {
  //     margin: [5, 5, 5, 5], // Reduce margins to fit more content
  //     filename: fileName,
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 1, useCORS: true }, // Increase scale for better resolution
  //     jsPDF: { unit: "mm", format: "a3", orientation: "portrait" }, 
  //     pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // Ensure proper page breaks
  //   };
    
    
    
  
  //   try {
  //     await html2pdf().from(element).set(opt).save();
  //   } catch (error) {
  //     console.error("Error generating PDF:", error);
  //     alert("Failed to generate PDF.");
  //   }
  // };
  

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
          <div className="d-flex gap-2">
  <button onClick={handleSaveOrUpload} className="btn btn-primary">
     Save & Upload
  </button>

      {/* Snackbar Notification at Bottom-Right */}
      <ToastContainer
        position="bottom-end"
        className="p-3"
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1050 }}
      >
        <Toast bg={toastVariant} show={showToast} onClose={() => setShowToast(false)} delay={2000} autohide>
          <Toast.Body className="text-white text-center">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
  {/* <button onClick={ handleDownloadPDF} className="btn btn-primary">
    Download PDF
  </button> */}
</div>

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
  <div 
    id="resume-preview" 
    className="bg-white rounded-lg p-3 shadow-sm h-100 overflow-auto" 
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
