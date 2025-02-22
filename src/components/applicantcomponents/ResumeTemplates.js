// import { Card, Row, Col } from "react-bootstrap";

// const ResumeTemplates = () => {
//   return (
//     <div className="p-4 flex-grow-1">
//       <h2 className="fw-bold">Start building your resume</h2>
//       <p className="text-muted">
//         Your first resume – 100% free, all design features, unlimited downloads.
//       </p>

//       <Row className="mt-4 g-4">
//         <Col md={4}>
//           <Card className="border-dashed text-center py-5">
//             <Card.Body>
//               <h5 className="text-muted">+ New Blank</h5>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//               <Card.Title>Blue Multi-column Resume</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//               <Card.Title>Executive Black & White</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ResumeTemplates;



// import { Card, Row, Col } from "react-bootstrap";
// import "./ResumeTemplates.css";

// const ResumeTemplates = () => {
//   return (
//     <div className="container py-4">
//       <h2 className="fw-bold">Start Building Your Resume</h2>
//       <p className="text-muted">100% free, with unlimited downloads and professional design features.</p>

//       <Row className="mt-4 g-4">
//         {/* New Blank Resume */}
//         <Col md={4}>
//           <Card className="border-dashed text-center p-5">
//             <Card.Body>
//               <h5 className="text-muted">+ New Blank Resume</h5>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Resume Templates */}
//         {[
//           { title: "Blue Multi-column Resume", img: "https://via.placeholder.com/200" },
//           { title: "Executive Black & White", img: "https://via.placeholder.com/200" },
//         ].map((template, index) => (
//           <Col md={4} key={index}>
//             <Card className="resume-card">
//               <Card.Img variant="top" src={template.img} className="resume-img" />
//               <Card.Body>
//                 <Card.Title>{template.title}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default ResumeTemplates;




// import { Link } from "react-router-dom";
// // import { AutoTypingResume } from "./AutoTypingResume";

//  const ResumeTemplates = () => {
//   return (
//     <section className="d-lg-flex align-items-center justify-content-center vh-100 vw-100">
//       <div className="container text-center text-lg-start">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <h1 className="text-primary fw-bold display-5">
//               Create a professional
//               <br />
//               resume easily
//             </h1>
//             <p className="mt-3 fs-5">
//               With this free, open-source, and powerful resume builder
//             </p>
//             <Link to="/resume-import" className="btn btn-primary mt-4">
//               Create Resume <span aria-hidden="true">→</span>
//             </Link>
//             <p className="mt-2 text-muted small">No sign up required</p>
//             <p className="mt-4 text-muted small">
//               Already have a resume? Test its ATS readability with the
//               <Link to="/resume-parser" className="text-decoration-underline">
//                 resume parser
//               </Link>
//             </p>
//           </div>
//           <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
//             {/* <AutoTypingResume /> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ResumeTemplates



// import { Link } from "react-router-dom";
// import  AutoTypingResume  from "./AutoTypingResume";

// const ResumeTemplates = () => {
//   return (
//     <section className="d-lg-flex align-items-start justify-content-center vh-100 vw-150 mt-lg-0">
//       <div className="container text-center text-lg-start">
//         <div className="row align-items-center">
//           <div className="col-lg-15">
//             <h1 style={{ color: '#000' }}  className="fw-bold display-6">
//               Create a professional
//               <br />
//               resume easily
//             </h1>
//             <p className="mt-3 fs-5">
//               With this free, open-source, and powerful resume builder
//             </p>
//             <Link to="/resume-import" className="btn btn-primary mt-4">
//               Create Resume <span aria-hidden="true">→</span>
//             </Link>
//             <p className="mt-2 text-muted small">No sign up required</p>
//             <p className="mt-4 text-muted small">
//               Already have a resume? Test its ATS readability with the 
//               <Link to="/resume-parser" className="ms-1 text-decoration-underline">
//                 resume parser
//               </Link>
//             </p>
//           </div>
//           <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
//             <AutoTypingResume />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ResumeTemplates;



// import { Link } from "react-router-dom";
// import AutoTypingResume from "./AutoTypingResume";

// const ResumeTemplates = () => {
//   return (
//     <section className="d-flex flex-column flex-lg-row align-items-center justify-content-center vh-150 vw-150 mt-lg-0">
//       <div className="container text-center text-lg-start">
//         <div className="row align-items-center">
//           {/* Left Side - Text Content */}
//           <div className="col-lg-6">
//             <h1 style={{ color: "#000" }} className="fw-bold display-6">
//               Create a professional
//               <br />
//               resume easily
//             </h1>
//             <p className="mt-3 fs-5">
//               With this free, open-source, and powerful resume builder
//             </p>
//             <Link to="/resume-import" className="btn btn-primary mt-4">
//               Create Resume <span aria-hidden="true">→</span>
//             </Link>
//             <p className="mt-2 text-muted small">No sign-up required</p>
//             <p className="mt-4 text-muted small">
//               Already have a resume? Test its ATS readability with the
//               <Link to="/resume-parser" className="ms-1 text-decoration-underline">
//                 resume parser
//               </Link>
//             </p>
//           </div>

//           {/* Right Side - AutoTypingResume */}
//           <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
//             <AutoTypingResume />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResumeTemplates;



// import { Link } from "react-router-dom";
// import AutoTypingResume from "./AutoTypingResume";

// const ResumeTemplates = () => {
//   return (
//     <section className="d-flex flex-column flex-lg-row align-items-center justify-content-center vh-100 vw-100 mt-lg-0 py-5">
//       <div className="container text-center text-lg-start">
//         <div className="row align-items-center">
//           {/* Left Side - Text Content */}
//           <div className="col-lg-6">
//             <h1 style={{ color: "#000" }} className="fw-bold display-6">
//               Create a professional
//               <br />
//               resume easily
//             </h1>
//             <p className="mt-3 fs-5">
//               With this free, open-source, and powerful resume builder
//             </p>
//             <Link to="/resume-import" className="btn btn-primary mt-4">
//               Create Resume <span aria-hidden="true">→</span>
//             </Link>
//             <p className="mt-2 text-muted small">No sign-up required</p>
//             <p className="mt-4 text-muted small">
//               Already have a resume? Test its ATS readability with the
//               <Link to="/resume-parser" className="ms-1 text-decoration-underline">
//                 resume parser
//               </Link>
//             </p>
//           </div>

//           {/* Right Side - AutoTypingResume */}
//           <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
//             <AutoTypingResume />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResumeTemplates;



import { Link } from "react-router-dom";
import AutoTypingResume from "./AutoTypingResume";
import { useEffect } from "react";

const ResumeTemplates = () => {
  useEffect(() => {
    // Prevent horizontal overflow
    document.body.style.overflowX = "hidden";
    return () => {
      // Clean up the style on component unmount
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <>
    <section className="d-flex flex-column flex-lg-row align-items-center justify-content-center vh-100 w-100 mt-lg-0 py-5">
      <div className="container text-center text-lg-start">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-lg-6">
            <h1 style={{ color: "#000" }} className="fw-bold display-6">
              Create a professional
              <br />
              resume easily
            </h1>
            <p className="mt-3 fs-5">
              With this free, open-source, and powerful resume builder
            </p>
            <Link to="/resume-import" className="btn btn-primary mt-4">
              Create Resume <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-2 text-muted small">No sign-up required</p>
            <p className="mt-4 text-muted small">
              Already have a resume? Test its ATS readability with the
              <Link to="/resume-parser" className="ms-1 text-decoration-underline">
                resume parser
              </Link>
            </p>
          </div>

          {/* Right Side - AutoTypingResume */}
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
            <AutoTypingResume />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ResumeTemplates;
