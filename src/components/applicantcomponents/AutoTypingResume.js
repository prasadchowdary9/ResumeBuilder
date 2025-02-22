// import { useState, useEffect } from "react";

// const AutoTypingResume = () => {
//   const sampleResumeText = `
//   John Doe
//   Software Engineer
//   Experience: 5+ years in ReactJS, Node.js, and JavaScript.
//   Skills: ReactJS, Redux, HTML, CSS, JavaScript, TypeScript, Git.
//   Education: B.Sc. Computer Science, XYZ University.
// `;

//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       setDisplayText((prev) => sampleResumeText.slice(0, prev.length + 1));
//       setIndex((prev) => prev + 1);

//       if (index >= sampleResumeText.length) {
//         clearInterval(typingInterval);
//       }
//     }, 50); // Adjust typing speed

//     return () => clearInterval(typingInterval);
//   }, [index]);

//   return (
//     <div
//       style={{
//         fontFamily: "monospace",
//         whiteSpace: "pre-line",
//         padding: "20px",
//         backgroundColor: "#f8f9fa",
//         borderRadius: "10px",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         width: "100%",
//         maxWidth: "400px",
//       }}
//     >
//       {displayText}
//     </div>
//   );
// };

// export default AutoTypingResume;



// import { useState, useEffect } from "react";

// const AutoTypingResume = () => {
//   const sampleResumeText = `
  
//           John Doe                 
//        Software Engineer            
//       📍 New York, USA               
//       ✉ john.doe@example.com       
//       📞 +91 7776662221          

//   🔹 EXPERIENCE
//   - 5+ years in Web Development (ReactJS, Node.js, JavaScript).
//   - Developed scalable UI for 20+ enterprise projects.
//   - Led a team of 5 developers in Agile sprints.

//   🔹 SKILLS
//   ✅ ReactJS, Redux, JavaScript, TypeScript
//   ✅ HTML, CSS, Tailwind, Bootstrap
//   ✅ Node.js, Express.js, MongoDB
//   ✅ Git, GitHub, CI/CD Pipelines

//   🔹 EDUCATION
//   🎓 B.Sc. in Computer Science - XYZ University (2016-2020)

//   🔹 CERTIFICATIONS
//   📜 AWS Certified Developer - Associate
//   📜 ReactJS Advanced Certification

//   🔹 INTERESTS
//   💡 AI & Machine Learning, Open Source Contributions, Blogging
// `;

//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       setDisplayText((prev) => sampleResumeText.slice(0, prev.length + 1));
//       setIndex((prev) => prev + 1);

//       if (index >= sampleResumeText.length) {
//         clearInterval(typingInterval);
//       }
//     }, 30); // Faster typing speed for better effect

//     return () => clearInterval(typingInterval);
//   }, [index]);

//   return (
//     <div
//       style={{
//         fontFamily: "monospace",
//         whiteSpace: "pre-line",
//         padding: "20px",
//         backgroundColor: "#f8f9fa",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         width: "100%",
//         maxWidth: "450px",
//         lineHeight: "1.5",
//         color: "#333",
//       }}
//     >
//       {displayText}
//     </div>
//   );
// };

// export default AutoTypingResume;


// import React, { useEffect, useState } from "react";
// import Typed from "typed.js";
// import R1 from "../../assests/Resume/R1.jpg"
// import R2 from "../../assests/Resume/R2.jpg"

// const AutoTypingResume = () => {
//   const [typed, setTyped] = useState(null);

//   useEffect(() => {
//     const options = {
//       strings: [
//         "John Doe", 
//         "Software Engineer obsessed with building exceptional products that people love"
//       ],
//       typeSpeed: 50,
//       backSpeed: 25,
//       loop: true,
//     };

//     const typedInstance = new Typed("#typed-output", options);
//     setTyped(typedInstance);

//     return () => {
//       typedInstance.destroy();
//     };
//   }, []);

//   return (
//     <div className="resume-preview">
//       <h3 id="typed-output" className="text-blue-200 font-bold text-m"></h3>
//       <p className="text-gray-600 mt-2">hello@openresume.com | 123-456-7890 | NYC, NY | linkedin.com/in/john-doe</p>
//       <div className="work-experience mt-4">
//         <h3 className="font-semibold">WORK EXPERIENCE</h3>
//         <p><strong>ABC Company</strong> - Software Engineer (May 2023 - Present)</p>
//         <ul>
//           <li>Lead a cross-functional team in developing a search bar...</li>
//           <li>Create stunning home page animations...</li>
//           <li>Write clean, modular code ensuring 100% test coverage...</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AutoTypingResume;


import React, { useState, useEffect } from 'react';
import R1 from '../../images/Resume/R1.jpg';
import R2 from '../../images/Resume/R2.jpg';

const AutoTypingResume= () => {
  const images = [R1, R2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image click
  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Effect to handle automatic image rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Resume ${currentIndex + 1}`}
        onClick={handleImageClick}
        style={{ cursor: 'pointer', width: '100%', height: 'auto' }} // Adjust styles as needed
      />
    </div>
  );
};

export default AutoTypingResume;
