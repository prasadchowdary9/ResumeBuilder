
// import React, { useState } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";
// import { FaFilePdf } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import * as pdfjs from "pdfjs-dist/build/pdf";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// const DropResume = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState("");
//   const [score, setScore] = useState(null);
//   const navigate = useNavigate();

//   // Extract Text from PDF
//   const extractTextFromPDF = async (file) => {
//     const reader = new FileReader();
//     reader.readAsArrayBuffer(file);
//     reader.onload = async () => {
//       const pdf = await pdfjs.getDocument({ data: reader.result }).promise;
//       let text = "";
//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const content = await page.getTextContent();
//         text += content.items.map((item) => item.str).join(" ");
//       }
//       calculateATSScore(text);
//     };
//   };

//   // Calculate ATS Score
//   const calculateATSScore = (text) => {
//     const keywords = ["React", "JavaScript", "CSS", "HTML", "Redux", "Node.js", "MongoDB"];
//     let matchCount = keywords.filter((keyword) => text.includes(keyword)).length;
//     let atsScore = (matchCount / keywords.length) * 100;
//     atsScore = Math.round(atsScore);

//     setScore(atsScore);
//     navigate("/ats-score", { state: { atsScore } });
//   };

//   // Validate and Process File
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setSelectedFile(file);
//       setError("");
//       extractTextFromPDF(file);
//     } else {
//       setSelectedFile(null);
//       setError("Invalid file type! Only PDF files are allowed.");
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="text-center shadow-lg p-4" style={{ width: "40rem" }}>
//         <Card.Body>
//           <h3 className="mb-3">Import data from an existing resume</h3>
//           <div className="border rounded p-4 bg-light d-flex flex-column align-items-center">
//             <FaFilePdf size={50} color="#4A90E2" className="mb-3" />
//             <p className="fw-bold">Browse a PDF file or drop it here</p>
//             <small className="text-muted">
//               🔒 File data is used locally and never leaves your browser
//             </small>
//             <input
//               type="file"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//               id="fileInput"
//             />
//             <Button variant="primary" className="mt-3 px-4 py-2" onClick={() => document.getElementById("fileInput").click()}>
//               Browse File
//             </Button>
//           </div>
//           {selectedFile && <p className="mt-3 text-success">✅ {selectedFile.name}</p>}
//           {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default DropResume;




// import React, { useState } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";

// import { FaFilePdf } from "react-icons/fa";
// import * as pdfjsLib from "pdfjs-dist/webpack";

// const DropResume = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState("");
//   const [atsScore, setAtsScore] = useState(null);

//   // Handle file selection via input
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     validateAndProcessFile(file);
//   };

//   // Handle drag-and-drop
//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     validateAndProcessFile(file);
//   };

//   // Validate and process file
//   const validateAndProcessFile = (file) => {
//     if (file && file.type === "application/pdf") {
//       setSelectedFile(file);
//       setError(""); // Clear error message
//     } else {
//       setSelectedFile(null);
//       setError("Invalid file type! Only PDF files are allowed.");
//     }
//   };

//   // Extract text from PDF
//   const extractTextFromPDF = async (file) => {
//     const reader = new FileReader();
//     reader.onload = async () => {
//       const typedArray = new Uint8Array(reader.result);
//       const pdf = await pdfjsLib.getDocument(typedArray).promise;
//       let extractedText = "";

//       for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//         const page = await pdf.getPage(pageNum);
//         const textContent = await page.getTextContent();
//         const pageText = textContent.items.map((item) => item.str).join(" ");
//         extractedText += ` ${pageText}`;
//       }

//       calculateATSScore(extractedText);
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   // Calculate ATS Score
//   const calculateATSScore = (text) => {
//     const keywords = ["JavaScript", "React", "CSS", "HTML", "Node.js"];
//     const textLower = text.toLowerCase();
//     const matches = keywords.filter((keyword) =>
//       textLower.includes(keyword.toLowerCase())
//     );
//     const score = (matches.length / keywords.length) * 100;
//     setAtsScore(Math.round(score));
//   };

//   // Handle file submission
//   const handleSubmit = () => {
//     if (selectedFile) {
//       extractTextFromPDF(selectedFile);
//     }
//   };

//   // Handle "Create from Scratch"
//   const handleCreateFromScratch = () => {
//     window.location.href = "/resume-builder";
//     // Add navigation logic here if using React Router
//   };

//   return (
//     <Container className="d-flex justify-content-end align-items-center   ">
//       <Card className="text-center shadow-lg p-4 align-items-center justify-content-center " style={{width:"40%!important"}}>
//         <Card.Body >
//           <h3 className="mb-3">Import data from an existing resume</h3>
//           {/* Drag-and-Drop Box */}
//           <div
//             className="border rounded p-4 bg-blue d-flex flex-column align-items-center"
//             onDrop={handleDrop}
//             onDragOver={(e) => e.preventDefault()}
//           >
//             <FaFilePdf size={50} color="#4A90E2" className="mb-3" />
//             <p className="fw-bold">Browse a PDF file or drop it here</p>
//             <small className="text-muted">
//               🔒 File data is used locally and never leaves your browser
//             </small>
//             {/* Hidden File Input */}
//             <input
//               type="file"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               style={{ display: "none" }}
//               id="fileInput"
//             />
//             <button
//               variant="primary"
//               className="mt-3 px-4 py-2"
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               Browse File
//             </button>
//           </div>
//           {/* Show Selected File Name */}
//           {selectedFile && (
//             <p className="mt-3 text-success">✅ {selectedFile.name}</p>
//           )}
//           {/* Error Message */}
//           {error && (
//             <Alert variant="danger" className="mt-3">
//               {error}
//             </Alert>
//           )}
//           {/* Submit Button - Appears Only if a Valid PDF is Uploaded */}
//           {selectedFile && (
//             <Button
//               variant="primary"
//               className="mt-3 px-4 py-2"
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           )}
//           {/* Display ATS Score */}
//           {atsScore !== null && (
//             <div className="mt-4">
//               <h4>ATS Score: {atsScore} / 100</h4>
//               <p>
//                 {atsScore < 50
//                   ? "❌ Poor"
//                   : atsScore < 70
//                   ? "⚠️ Average"
//                   : "✅ Best"}
//               </p>
//             </div>
//           )}
//           <hr />
//           <p>Don't have a resume yet?</p>
//           <button
//             variant="primary"
//             className="mt-3 px-4 py-2"
//             onClick={handleCreateFromScratch}
//           >
//             Create from Scratch
//           </button>
//         </Card.Body>
        
//       </Card>
      
//     </Container>
    
//   );
// };

// export default DropResume;


import React, { useState,useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist/webpack";

const DropResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [atsScore, setAtsScore] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateAndProcessFile(file);
  };

  // Handle drag-and-drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    validateAndProcessFile(file);
  };

  // Validate PDF file
  const validateAndProcessFile = (file) => {
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setError("");
    } else {
      setSelectedFile(null);
      setError("Invalid file type! Only PDF files are allowed.");
    }
  };

  // Extract text from PDF
  const extractTextFromPDF = async (file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      let extractedText = "";

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        extractedText += ` ${pageText}`;
      }

      calculateATSScore(extractedText);
    };
    reader.readAsArrayBuffer(file);
  };

  // Calculate ATS Score
  const calculateATSScore = (text) => {
    const keywords = ["JavaScript", "React", "CSS", "HTML", "Node.js"];
    const textLower = text.toLowerCase();
    const matches = keywords.filter((keyword) =>
      textLower.includes(keyword.toLowerCase())
    );
    const score = (matches.length / keywords.length) * 100;
    setAtsScore(Math.round(score));
  };

  // Handle file submission
  const handleSubmit = () => {
    if (selectedFile) {
      extractTextFromPDF(selectedFile);
    }
  };

  // Handle "Create from Scratch"
  const handleCreateFromScratch = () => {
    window.location.href = "/resume-builder";
  };

    const [cardWidth, setCardWidth] = useState(
      window.innerWidth < 920 ? "90%" : "60%"
    );
  
    useEffect(() => {
      const handleResize = () => {
        setCardWidth(window.innerWidth < 920 ? "90%" : "60%");
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      backgroundColor: "#f8f9fa" 
    }}>
      <div style={{ 
        width: cardWidth, 
        maxWidth: "600px", 
        backgroundColor: "white", 
        padding: "20px", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        textAlign: "center" 
      }}>
        <h3 style={{ marginBottom: "20px" }}>Import data from an existing resume</h3>

        {/* Drag-and-Drop Box */}
        <div
          style={{
            border: "2px dashed #ccc",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f4f4f4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <FaFilePdf size={50} color="#4A90E2" style={{ marginBottom: "10px" }} />
          <p style={{ fontWeight: "bold" }}>Browse a PDF file or drop it here</p>
          <small style={{ color: "#6c757d" }}>
            🔒 File data is used locally and never leaves your browser
          </small>
          {/* Hidden File Input */}
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#F97316",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => document.getElementById("fileInput").click()}
          >
            Browse File
          </button>
        </div>

        {/* Show Selected File Name */}
        {selectedFile && (
          <p style={{ marginTop: "15px", color: "green" }}>✅ {selectedFile.name}</p>
        )}

        {/* Error Message */}
        {error && <p style={{ marginTop: "15px", color: "red" }}>{error}</p>}

        {/* Submit Button */}
        {selectedFile && (
          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "#F97316",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}

        {/* Display ATS Score */}
        {atsScore !== null && (
          <div style={{ marginTop: "20px" }}>
            <h4>ATS Score: {atsScore} / 100</h4>
            <p>
              {atsScore < 50 ? "❌ Poor" : atsScore < 70 ? "⚠️ Average" : "✅ Best"}
            </p>
          </div>
        )}

        <hr style={{ margin: "20px 0" }} />
        <p>Don't have a resume yet?</p>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#F97316",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleCreateFromScratch}
        >
          Create from Scratch
        </button>
      </div>
    </div>
  );
};

export default DropResume;
