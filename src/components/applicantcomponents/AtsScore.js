// import React from "react";
// import { Container, Card } from "react-bootstrap";
// import { useLocation } from "react-router-dom";

// const AtsScore = () => {
//   const location = useLocation();
//   const atsScore = location.state?.atsScore || 0;

//   let feedback;
//   if (atsScore < 50) feedback = "❌ Poor";
//   else if (atsScore < 70) feedback = "⚠️ Average";
//   else feedback = "✅ Best";

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="text-center shadow-lg p-4" style={{ width: "30rem" }}>
//         <Card.Body>
//           <h2 className="mb-3">ATS Score</h2>
//           <h1 className="text-primary">{atsScore} / 100</h1>
//           <h4 className="mt-3">{feedback}</h4>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default AtsScore;



import React from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const AtsScore = () => {
  const location = useLocation();
  const atsScore = location.state?.atsScore || 0;

  let feedback;
  let variant;
  if (atsScore < 50) {
    feedback = "❌ Poor";
    variant = "danger";
  } else if (atsScore < 70) {
    feedback = "⚠️ Average";
    variant = "warning";
  } else {
    feedback = "✅ Best";
    variant = "success";
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center shadow-lg p-4" style={{ width: "30rem" }}>
        <Card.Header as="h4" className="bg-primary text-white">
          ATS Score Analysis
        </Card.Header>
        <Card.Body>
          <Card.Title className="mb-3">Your Resume's ATS Score</Card.Title>
          <h1 className={`display-3 text-${variant}`}>{atsScore} / 100</h1>
          <ProgressBar
            now={atsScore}
            variant={variant}
            className="my-3"
            style={{ height: "1.5rem" }}
          />
          <Card.Text className="mt-3 fs-4">{feedback}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Ensure your resume aligns with the job description for a better score.
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default AtsScore;
