// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function DropResume() {
//   const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
//   const [hasAddedResume, setHasAddedResume] = useState(false);
//   const [resumeFile, setResumeFile] = useState(null);

//   const onFileChange = (event) => {
//     const file = event.target.files[0];
//     setResumeFile(file);
//     setHasAddedResume(!!file);
//   };

//   useEffect(() => {
//     // Replace with your actual implementation to check if the user has used the app before
//     const usedAppBefore = localStorage.getItem('hasUsedAppBefore') === 'true';
//     setHasUsedAppBefore(usedAppBefore);
//   }, []);

//   return (
//     <main>
//       <div className="container mx-auto mt-14 max-w-3xl rounded-md border border-gray-200 px-10 py-10 text-center shadow-md">
//         {!hasUsedAppBefore ? (
//           <>
//             <h1 className="text-lg font-semibold text-gray-900">
//               Import data from an existing resume
//             </h1>
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={onFileChange}
//               className="mt-5"
//             />
//             {!hasAddedResume && (
//               <>
//                 <OrDivider />
//                 <SectionWithHeadingAndCreateButton
//                   heading="Don't have a resume yet?"
//                   buttonText="Create from scratch"
//                 />
//               </>
//             )}
//           </>
//         ) : (
//           <>
//             {!hasAddedResume && (
//               <>
//                 <SectionWithHeadingAndCreateButton
//                   heading="You have data saved in browser from a prior session"
//                   buttonText="Continue where I left off"
//                 />
//                 <OrDivider />
//               </>
//             )}
//             <h1 className="font-semibold text-gray-900">
//               Override data with a new resume
//             </h1>
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={onFileChange}
//               className="mt-5"
//             />
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

// const OrDivider = () => (
//   <div className="flex items-center py-6" aria-hidden="true">
//     <div className="flex-grow border-t border-gray-200" />
//     <span className="mx-2 text-lg text-gray-400">or</span>
//     <div className="flex-grow border-t border-gray-200" />
//   </div>
// );

// const SectionWithHeadingAndCreateButton = ({ heading, buttonText }) => {
//   return (
//     <>
//       <p className="font-semibold text-gray-900">{heading}</p>
//       <div className="mt-5">
//         <Link
//           to="/resume-builder"
//           className="outline-theme-blue rounded-full bg-sky-500 px-6 py-2 text-base font-semibold text-white"
//         >
//           {buttonText}
//         </Link>
//       </div>
//     </>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// export default function DropResume() {
//   const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
//   const [hasAddedResume, setHasAddedResume] = useState(false);
//   const [resumeFile, setResumeFile] = useState(null);

//   const onFileChange = (event) => {
//     const file = event.target.files[0];
//     setResumeFile(file);
//     setHasAddedResume(!!file);
//   };

//   useEffect(() => {
//     // Replace with your actual implementation to check if the user has used the app before
//     const usedAppBefore = localStorage.getItem('hasUsedAppBefore') === 'true';
//     setHasUsedAppBefore(usedAppBefore);
//   }, []);

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card className="p-4 shadow-sm">
//             <Card.Body>
//               {!hasUsedAppBefore ? (
//                 <>
//                   <Card.Title className="text-center mb-4">
//                     Import data from an existing resume
//                   </Card.Title>
//                   <Form.Group controlId="formFile" className="mb-3">
//                     <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={onFileChange} />
//                   </Form.Group>
//                   {!hasAddedResume && (
//                     <>
//                       <OrDivider />
//                       <SectionWithHeadingAndCreateButton
//                         heading="Don't have a resume yet?"
//                         buttonText="Create from scratch"
//                       />
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   {!hasAddedResume && (
//                     <>
//                       <SectionWithHeadingAndCreateButton
//                         heading="You have data saved in the browser from a prior session"
//                         buttonText="Continue where I left off"
//                       />
//                       <OrDivider />
//                     </>
//                   )}
//                   <Card.Title className="text-center mb-4">
//                     Override data with a new resume
//                   </Card.Title>
//                   <Form.Group controlId="formFile" className="mb-3">
//                     <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={onFileChange} />
//                   </Form.Group>
//                 </>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// const OrDivider = () => (
//   <div className="d-flex align-items-center my-4">
//     <hr className="flex-grow-1" />
//     <span className="mx-2 text-muted">or</span>
//     <hr className="flex-grow-1" />
//   </div>
// );

// const SectionWithHeadingAndCreateButton = ({ heading, buttonText }) => {
//   return (
//     <div className="text-center">
//       <p className="fw-bold">{heading}</p>
//       <Button as={Link} to="/resume-builder" variant="primary" className="mt-2">
//         {buttonText}
//       </Button>
//     </div>
//   );
// };



// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { FaFilePdf } from "react-icons/fa";

// const DropResume = () => {
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
//             <Button variant="primary" className="mt-3 px-4 py-2">
//               Browse File
//             </Button>
//           </div>
//           <hr />
//           <p>Don't have a resume yet?</p>
//           <Button variant="primary" className="mt-3 px-4 py-2">
//             Create from Scratch
//           </Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default DropResume;



// import React, { useState } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";
// import { FaFilePdf } from "react-icons/fa";

// const DropResume = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState("");

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

//   // Handle file submission
//   const handleSubmit = () => {
//     alert(`Submitting file: ${selectedFile.name}`);
//     // Add actual upload logic here if needed
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="text-center shadow-lg p-4" style={{ width: "40rem" }}>
//         <Card.Body>
//           <h3 className="mb-3">Import data from an existing resume</h3>
//           {/* Drag-and-Drop Box */}
//           <div
//             className="border rounded p-4 bg-light d-flex flex-column align-items-center"
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
//             <Button
//               variant="primary"
//               className="mt-3 px-4 py-2"
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               Browse File
//             </Button>
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
//   <Button
//     variant="primary"
//     className="mt-3 px-4 py-2"
//     onClick={handleSubmit}
//     style={{
//       transition: "0.3s",
//     }}
//     onMouseEnter={(e) => (e.variant= "primary")} // Primary color on hover
//     onMouseLeave={(e) => (e.variant= "secondary")} // Secondary color on hover
//   >
//     Submit
//   </Button>
// )}

//           <hr />
//           <p>Don't have a resume yet?</p>
//           <Button variant="primary" className="mt-3 px-4 py-2">
//             Create from Scratch
//           </Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default DropResume;



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




import React, { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import * as pdfjsLib from "pdfjs-dist/webpack";

const DropResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [atsScore, setAtsScore] = useState(null);

  // Handle file selection via input
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

  // Validate and process file
  const validateAndProcessFile = (file) => {
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setError(""); // Clear error message
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
    // Add navigation logic here if using React Router
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center shadow-lg p-4" style={{ width: "40rem" }}>
        <Card.Body>
          <h3 className="mb-3">Import data from an existing resume</h3>
          {/* Drag-and-Drop Box */}
          <div
            className="border rounded p-4 bg-light d-flex flex-column align-items-center"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <FaFilePdf size={50} color="#4A90E2" className="mb-3" />
            <p className="fw-bold">Browse a PDF file or drop it here</p>
            <small className="text-muted">
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
            <Button
              variant="primary"
              className="mt-3 px-4 py-2"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Browse File
            </Button>
          </div>
          {/* Show Selected File Name */}
          {selectedFile && (
            <p className="mt-3 text-success">✅ {selectedFile.name}</p>
          )}
          {/* Error Message */}
          {error && (
            <Alert variant="danger" className="mt-3">
              {error}
            </Alert>
          )}
          {/* Submit Button - Appears Only if a Valid PDF is Uploaded */}
          {selectedFile && (
            <Button
              variant="primary"
              className="mt-3 px-4 py-2"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
          {/* Display ATS Score */}
          {atsScore !== null && (
            <div className="mt-4">
              <h4>ATS Score: {atsScore} / 100</h4>
              <p>
                {atsScore < 50
                  ? "❌ Poor"
                  : atsScore < 70
                  ? "⚠️ Average"
                  : "✅ Best"}
              </p>
            </div>
          )}
          <hr />
          <p>Don't have a resume yet?</p>
          <Button
            variant="primary"
            className="mt-3 px-4 py-2"
            onClick={handleCreateFromScratch}
          >
            Create from Scratch
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DropResume;
