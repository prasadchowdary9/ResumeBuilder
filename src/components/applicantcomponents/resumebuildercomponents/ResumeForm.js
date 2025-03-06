
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useUserContext } from "../../common/UserProvider";
import ResumeTemplateQueue from "./ResumeTemplateQueue";
import { apiUrl } from "../../../services/ApplicantAPIService";
const ResumeForm = ({ data, onChange }) => {
const [resumeData, setResumeData] = useState({
});
const [putData, setPutData] = useState({})
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const user = useUserContext()?.user;

  useEffect(() => {
    if (user?.id) {
      fetchResumeData();
      // fetchUpdatedResume();

    }
  }, [user?.id]); // Depend only on `user?.id`

 

//   const fetchResumeData = async () => {
//     if (!user?.id) return;

//     setLoading(true);
//     try {
//       const jwtToken = localStorage.getItem("jwtToken");
//       const response = await fetch(`${apiUrl}/resume-builder/getResume/${user.id}`, {
//         headers: { Authorization: `Bearer ${jwtToken}` },
//       });

//       if (!response.ok) throw new Error(`Error: ${response.status}`);

//       const data = await response.json();
//       setPutData(data)
//             setResumeData({
//         ...(data.resumePersonalInfo || {}), // Spread personal info
//         experiences: data.resumeExperiences || [], // Ensure experiences is always an array
//         educations: data.resumeEducations || [],
//         projects: data.resumeProjects || [],
//         certifications: data.resumeCertificates || [],
//         languages: data.resumeLanguages || [],
//         interests: data.resumeIntrests || [],
//         skills: data.resumeSkills || [],
        
       
//       });
//       console.log(data.resumeExperiences);
//       console.log(data.resumeExperiences[0].company);
//       console.log(data.resumeSkills.technicalSkills[0]);
//       console.log(data.resumeIntrest.intrests[0]);
//       console.log(data.resumeLanguages[0].languageName);
//       console.log(data.resumeCertificates[ 0].title);
      
// console.log(resumeData)
// setIsEditing(true);

//     } catch (error) {
//       console.error("Error fetching resume data:", error);
//       setIsEditing(false);

//     } finally {
//       setLoading(false);

//     }
//   };


const fetchResumeData = async () => {
  if (!user?.id) return;

  setLoading(true);
  try {
    const jwtToken = localStorage.getItem("jwtToken");

    const response = await axios.get(`${apiUrl}/resume-builder/getResume/${user.id}`, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });

    const data = response.data;
    setPutData(data);

    setResumeData((prev) => ({
      ...prev,
      ...(data.resumePersonalInfo || {}), // Merge personal info
      experiences: data.resumeExperiences || [], // Keep existing if available
      educations: data.resumeEducations || [],
      projects: data.resumeProjects || [],
      certifications: data.resumeCertificates || [],
      languages: data.resumeLanguages || [],
      interests: data.resumeIntrests || [],
      skills: data.resumeSkills || [],
    }));

    console.log("Fetched Data:", data);
    setIsEditing(true);
  } catch (error) {
    console.error("Error fetching resume data:", error);
    setIsEditing(false);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    console.log("Updated resumeData:", resumeData);
  }, [resumeData]); // Logs resumeData when it changes
  
  const [updatedResumeData, setUpdatedResumeData] = useState(null);

  useEffect(() => {
    if (updatedResumeData) {
      saveResumeData();
    }
  }, [updatedResumeData]);
  
  // const handleSave = () => {
  //   setUpdatedResumeData(putData); // ✅ Ensure state updates first

  // };


  const handleSave = () => {
    saveResumeData(); // Directly call save function
  };
  
  
  // const saveResumeData = async () => {
  //   try {
  //     console.log("Sending updated data:", JSON.stringify(updatedResumeData, null, 2));
  
  //     const jwtToken = localStorage.getItem("jwtToken");
  //     const response = await fetch(`${apiUrl}/resume-builder/updateResume/${user.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //       body: JSON.stringify(updatedResumeData),
  //     });
  
  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(`Error: ${response.status} - ${errorText}`);
       
  //     }
  
  //     const responseData = await response.json();
  //     console.log("API response after update:", responseData);
  
  //   } catch (error) {
  //     console.error("Error updating resume:", error);
  //     alert("Resume saved successfully!");

  //   }
  // };
  
  const saveResumeData = async () => {
    try {
      // Ensure resumeData is properly formatted before sending
      const updatedPayload = {
        resumePersonalInfo: resumeData, // Personal Information
        resumeExperiences: resumeData.experiences || [], // Work Experiences
        resumeEducations: resumeData.educations || [],
        resumeProjects: resumeData.projects || [],
        resumeCertificates: resumeData.certifications || [],
        resumeLanguages: resumeData.languages || [],
        resumeIntrests: resumeData.interests || [],
        resumeSkills: resumeData.skills || [],
      };
  
      console.log("Sending updated data:", JSON.stringify(updatedPayload, null, 2));
  
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await axios.put(
        `${apiUrl}/resume-builder/updateResume/${user.id}`,
        updatedPayload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
  
      console.log("API response after update:", response.data);
      alert("Resume saved successfully!");
    } catch (error) {
      console.error("Error updating resume:", error);
      alert("Error saving resume.");
    }
  };
  
  

  
  

  if (loading) return <p>Loading...</p>;
  if (!resumeData) return <p>No resume data found.</p>;

  // const { user } = useUserContext();
    const applicantId = user.id;
  // const updatePersonalInfo = (field, value) => {
  //   onChange({
  //     ...data,
  //     personalInfo: {
  //       ...data.personalInfo,
  //       [field]: value,
  //     },
  //   });
  // };


  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  
   // Function to update education details
   const updateEducation = (index, field, value) => {
    const newEducation = [...data.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    onChange({ ...data, education: newEducation });
  };
  

  // Function to add a new education entry
  const addEducation = () => {
    const newEducation = [
      ...data.education,
      { university: '', degree: '', fieldOfStudy: '', graduationDate: '', percentage: '', description: '', school:'' },
    ];
    onChange({ ...data, education: newEducation });
  };

  // Function to remove an education entry
  const removeEducation = (index) => {
    const newEducation = data.education.filter((_, i) => i !== index);
    onChange({ ...data, education: newEducation });
  };
  // Function to update project details
const updateProject = (index, field, value) => {
  const newProjects = [...data.projects];
  newProjects[index] = { ...newProjects[index], [field]: value };
  onChange({ ...data, projects: newProjects });
};

// Function to add a new project entry
const addProject = () => {
  const newProjects = [
    ...data.projects,
    { title: '', description: '', technologies: '', link: '' },
  ];
  onChange({ ...data, projects: newProjects });
};

// Function to remove a project entry
const removeProject = (index) => {
  const newProjects = data.projects.filter((_, i) => i !== index);
  onChange({ ...data, projects: newProjects });
};

// Function to update certification details
const updateCertification = (index, field, value) => {
  const newCertifications = [...data.certifications];
  newCertifications[index] = { ...newCertifications[index], [field]: value };
  onChange({ ...data, certifications: newCertifications });
};

// Function to add a new certification entry
const addCertification = () => {
  const newCertifications = [
    ...data.certifications,
    { name: '', issuingOrganization: '', issueDate: '', expirationDate: '', credentialID: '', credentialURL: '' },
  ];
  onChange({ ...data, certifications: newCertifications });
};

// Function to remove a certification entry
const removeCertification = (index) => {
  const newCertifications = data.certifications.filter((_, i) => i !== index);
  onChange({ ...data, certifications: newCertifications });
};


const addSkill = () => {
  const newSkills = [...data.skills, ''];
  onChange({ ...data, skills: newSkills });
};

const removeSkill = (index) => {
  const newSkills = data.skills.filter((_, i) => i !== index);
  onChange({ ...data, skills: newSkills });
};
// lnaguage
const addLanguage = () => {
  const newLanguages = [...data.languages, '']; // Add an empty language
  onChange({ ...data, languages: newLanguages });
};

// const updateLanguage = (index, value) => {
//   const newLanguages = [...data.languages];
//   newLanguages[index] = value;
//   onChange({ ...data, languages: newLanguages });
// };
const updateLanguage = (value) => {
  onChange({ ...data, languages: [{ languageName: value }] });
};


const removeLanguage = (index) => {
  const newLanguages = data.languages.filter((_, i) => i !== index);
  onChange({ ...data, languages: newLanguages });
};

// intrest

const addInterest = () => {
  const newInterests = [...data.interests, '']; // Add an empty interest
  onChange({ ...data, interests: newInterests });
};

const updateInterest = (index, value) => {
  const newInterests = [...data.interests];
  newInterests[index] = value;
  onChange({ ...data, interests: newInterests });
};

const removeInterest = (index) => {
  const newInterests = data.interests.filter((_, i) => i !== index);
  onChange({ ...data, interests: newInterests });
};

  
 
  const saveResume = async () => {
    try {
      // Retrieve user data from localStorage
      const userData = JSON.parse(localStorage.getItem("user"));
      const jwtToken = userData?.data?.jwt;
      const applicantId = userData?.id;
  
      if (!jwtToken || !applicantId) {
        console.error("User is not authenticated");
        return;
      }
  
      // Construct the full resume payload
      const resumeData = {
        resumePersonalInfo: {
          fullName: data.personalInfo.name,
          email: data.personalInfo.email,
          phoneNo: data.personalInfo.phone,
          address: data.personalInfo.location,
          summary: data.personalInfo.summary,
          role: data.personalInfo.title,
          linkedin: data.personalInfo.linkedin, 
          github: data.personalInfo.github,
          website: data.personalInfo.website
        },
        resumeSkills: {
          technicalSkills: data.skills,
          // technicalSkillName: data.skills,

        },
        resumeExperiences: data.experience.map((exp) => ({
          company: exp.company,
          jobTitle: exp.jobTitle,
          startDate: exp.startDate,
          endDate: exp.endDate,
          description: exp.description,
        })),

       
          
        resumeEducations: data.education.map((edu) => ({
          college: edu.university,
          startYear: edu.graduationDate,
          endYear: edu.graduationDate, // Assuming same year for now
          cgpa: edu.percentage,
          standard: edu.degree,
        })),
        resumeProjects: data.projects.map((proj) => ({
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies.split(","),
          startDate: proj.startDate,
          endDate: proj.endDate,
          link: proj.link,
        })),
        resumeCertificates: data.certifications.map((cert) => ({
          title: cert.name,
          issuedBy: cert.issuingOrganization,
          year: cert.issueDate,
        })),
        resumeLanguages: data.languages.map((lang) => ({
          languageName: lang,
        })),
        resumeIntrest:{
          intrests:data.interests
        }
     
       
      };

      // Send API request
      const response = await fetch(`${apiUrl}/resume-builder/saveresume/${applicantId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(resumeData),
      });
  
      if (response.ok) {
        alert("Resume saved successfully!");
        setIsEditing(false); // ✅ Move it here after successful save
      } else {
        const errorData = await response.json();
        alert(`Failed to save resume: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("An error occurred while saving the resume.");
    }
  };
  console.log(resumeData.resumeExperiences?.[1]?.company);



  

  return (
    <div className="container row py-4">
      {/* Personal Information */}
<div className="mb-4">
  <h2 className="h4">Personal Information</h2>
  <div className="row g-3">
    {/* Existing Fields */}
    <div className="col-md-6">
      <label className="form-label">Full Name</label>
      {/* <input
        type="text"
        className="form-control"
        placeholder="Full Name"
        value={data.personalInfo.name  || resumeData.fullName}
        onChange={(e) => updatePersonalInfo("name", e.target.value)}
      /> */}

<input
  type="text"
  className="form-control"
  placeholder="Full Name"
  value={resumeData.fullName || ""}
  onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
/>

    </div>
    <div className="col-md-6">
      <label className="form-label">Professional Title</label>
      <input
        type="text"
        className="form-control"
        placeholder="Professional Title"
        value={data.personalInfo.title|| resumeData.role}
        onChange={(e) => updatePersonalInfo("title", e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={data.personalInfo.email|| resumeData.email}
        onChange={(e) => updatePersonalInfo("email", e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Phone</label>
      <input
        type="tel"
        className="form-control"
        placeholder="Phone"
        value={data.personalInfo.phone|| resumeData.phoneNo}
        onChange={(e) => updatePersonalInfo("phone", e.target.value)}
      />
    </div>
    <div className="col-md-12">
      <label className="form-label">Location</label>
      <input
        type="text"
        className="form-control"
        placeholder="Location"
        value={data.personalInfo.location|| resumeData.address}
        onChange={(e) => updatePersonalInfo("location", e.target.value)}
      />
    </div>
    <div className="col-md-12">
      <label className="form-label">Professional Summary</label>
      <textarea
        className="form-control"
        placeholder="Professional Summary"
        rows="3"
        value={data.personalInfo.summary|| resumeData.summary}
        onChange={(e) => updatePersonalInfo("summary", e.target.value)}
      />
    </div>

    {/* New Fields */}
    <div className="col-md-6">
      <label className="form-label">LinkedIn Profile</label>
      <input
        type="url"
        className="form-control"
        placeholder="LinkedIn URL"
        value={data.personalInfo.linkedin|| resumeData.linkedin}
        onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">GitHub Profile</label>
      <input
        type="url"
        className="form-control"
        placeholder="GitHub URL"
        value={data.personalInfo.github|| resumeData.github}
        onChange={(e) => updatePersonalInfo("github", e.target.value)}
      />
    </div>
    <div className="col-md-12">
      <label className="form-label">Personal Website</label>
      <input
        type="url"
        className="form-control"
        placeholder="Website URL"
        value={data.personalInfo.website|| resumeData.website}
        onChange={(e) => updatePersonalInfo("website", e.target.value)}
      />
    </div>
  </div>
  {/* <button
          type="button"
          className="btn btn-success mt-3"
          onClick={savePersonalInfo}
        >
          Save Personal Information
        </button> */}
</div>

      {/* Experience Section */}
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
                // value={exp.company || resumeData.resumeExperiences?.[0]?.company || ''}
                value={exp.company ||resumeData.experiences?.[index]?.company || ''}


               

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
  value={exp.jobTitle
    ||resumeData.experiences?.[index]?.jobTitle||""
  } // Change from `position` to `jobTitle`
  onChange={(e) => {
    const newExperience = [...data.experience];
    newExperience[index].jobTitle = e.target.value; // Update field name
    onChange({ ...data, experience: newExperience });
  }}
/>
            </div>
            <div className="mb-3">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g. Jan 2020"
                value={exp.startDate ||resumeData.experiences?.[index]?.startDate||""}
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[index].startDate = e.target.value;
                  onChange({ ...data, experience: newExperience });
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g. Jan 2020"
                value={exp.endDate||resumeData.experiences?.[index]?.endDate||""}
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[index].endDate = e.target.value;
                  onChange({ ...data, experience: newExperience });
                }}
              />
            </div>
            {/* Duration Field */}
            {/* <div className="mb-3">
              <label className="form-label">Duration</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Jan 2020 - Dec 2023"
                value={exp.duration||resumeData.experiences?.[index]?.duration||""}
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[index].duration = e.target.value;
                  onChange({ ...data, experience: newExperience });
                }}
              />
            </div> */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Describe your work experience"
                rows="3"
                value={exp.description||resumeData.experiences?.[index]?.description||""}
                onChange={(e) => {
                  const newExperience = [...data.experience];
                  newExperience[index].description = e.target.value;
                  onChange({ ...data, experience: newExperience });
                }}              />
            </div>
            {/* <button className="btn btn-success mt-3" onClick={saveExperiences}>
  Save Experiences
</button> */}

          </div>
          
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const newExperience = [
              ...data.experience,
              { company: "", position: "", duration: "" },
            ];
            onChange({ ...data, experience: newExperience });
          }}
        >
          <FaPlus className="me-2" />
          Add Experience
        </button>
      </div>
      {/* Education Section */}
      

<div className="mb-4">
        <h2 className="h4">Education</h2>
         {data.education.map((edu, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => removeEducation(index)}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">College</label>
              <input
                type="text"
                className="form-control"
                placeholder="University"
                value={edu.university ||resumeData.educations?.[index]?.college|| ''}
                onChange={(e) => updateEducation(index, 'university', e.target.value)}
              />
            </div>
            {/* <div className="mb-3">
              <label className="form-label">College</label>
              <input
                type="text"
                className="form-control"
                placeholder="School"
                value={edu.school||resumeData.educations?.[index]?.school|| ''}
                onChange={(e) => updateEducation(index, 'school', e.target.value)}
              />
            </div> */}
            <div className="mb-3">
              <label className="form-label">Degree</label>
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value={edu.degree ||resumeData.educations?.[index]?.standard|| ''}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
              />
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Field of Study</label>
              <input
                type="text"
                className="form-control"
                placeholder="Field of Study"
                value={edu.fieldOfStudy}
                onChange={(e) => updateEducation(index, 'fieldOfStudy', e.target.value)}
              />
            </div> */}
            <div className="mb-3">
              <label className="form-label">Graduation Start Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g., May 2024"
                value={edu.graduationStartDate  ||resumeData.educations?.[index]?.startYear|| ''}
                onChange={(e) => updateEducation(index, 'graduationStartDate', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Graduation End Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g., May 2024"
                value={edu.graduationDate ||resumeData.educations?.[index]?.endYear|| ''}
                onChange={(e) => updateEducation(index, 'graduationDate', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Percentage</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., 85%"
                value={edu.percentage ||resumeData.educations?.[index]?.cgpa|| ''}
                onChange={(e) => updateEducation(index, 'percentage', e.target.value)}
              />
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Describe your studies, achievements, or relevant coursework"
                rows="3"
                value={edu.description ||resumeData.educations?.[index]?.description|| ''}
                onChange={(e) => updateEducation(index, 'description', e.target.value)}
              />
            </div> */}
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addEducation}
        >
          <FaPlus className="me-2" />
          Add Education
        </button>
      </div>



{/* Skills Section */}
      {/* <div className="mb-4">
        <h2 className="h4">Skills</h2>
        {data.skills.map((skill, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => removeSkill(index)}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">Skill</label>
              <input
                type="text"
                className="form-control"
                placeholder="Skill"
                value={skill ||resumeData.skills?.[index].technicalSkills|| ''}
                onChange={(e) => {const newSkills = [...data.skills];
                  newSkills[index] = e.target.value;
                  onChange({ ...data, skills: newSkills });}}
              />  
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addSkill}
        >
          <FaPlus className="me-2" />
          Add Skill
        </button>
      </div> */}


<div className="mb-4">
  <h2 className="h4">Skills</h2>
  {data.skills.map((skill, index) => (
    <div key={index} className="mb-3 border p-3 position-relative">
      <button
        type="button"
        className="btn btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => {
          const newSkills = data.skills.filter((_, i) => i !== index);
          onChange({ ...data, skills: newSkills });
        }}
      >
        <FaTrash />
      </button>
      <div className="mb-3">
        <label className="form-label">Skill</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter skill"
          value={skill || resumeData.skills?.technicalSkills[index] || ""}
          onChange={(e) => {
            const newSkills = [...data.skills];
            newSkills[index] = e.target.value;
            onChange({ ...data, skills: newSkills });
          }}
        />
      </div>
    </div>
  ))}
  <button
    type="button"
    className="btn btn-primary"
    onClick={() => {
      const newSkills = [...data.skills, ""];
      onChange({ ...data, skills: newSkills });
    }}
  >
    <FaPlus className="me-2" />
    Add Skill
  </button>
</div>


      {/* Projects Section */}
      {/* <div className="mb-4">
  <h2 className="h4">Projects</h2>
  {data.projects.map((project, index) => (
    <div key={index} className="mb-3 border p-3 position-relative">
      <button
        type="button"
        className="btn btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => removeProject(index)}
      >
        <FaTrash />
      </button>
      <div className="mb-3">
        <label className="form-label">Project Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Project Title"
          value={project.title ||resumeData.projects?.[index].title|| ''}
          onChange={(e) => updateProject(index, 'title', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          placeholder="Brief description of the project"
          rows="3"
          value={project.description  ||resumeData.projects?.[index].description|| ''}
          onChange={(e) => updateProject(index, 'description', e.target.value)}
        />
      </div>
    
      <div className="mb-3">
        <label className="form-label">Project Link</label>
        <input
          type="url"
          className="form-control"
          placeholder="URL to the project or repository"
          value={project.link ||resumeData.projects?.[index].link|| ''}
          onChange={(e) => updateProject(index, 'link', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          value={project.startDate ||resumeData.projects?.[index].startDate|| ''}
          onChange={(e) => updateProject(index, 'startDate', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">End Date</label>
        <input
          type="date"
          className="form-control"
          value={project.endDate ||resumeData.projects?.[index].endDate|| ''}
          onChange={(e) => updateProject(index, 'endDate', e.target.value)}
        />
      </div>
    </div>
  ))}
  <button
    type="button"
    className="btn btn-primary"
    onClick={addProject}
  >
    <FaPlus className="me-2" />
    Add Project
  </button>
</div> */}
<div className="mb-4">
  <h2 className="h4">Projects</h2>
  {(data.projects ?? []).map((project, index) => (
    <div key={index} className="mb-3 border p-3 position-relative">
      <button
        type="button"
        className="btn btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => removeProject(index)}
      >
        <FaTrash />
      </button>
      <div className="mb-3">
        <label className="form-label">Project Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Project Title"
          value={project?.title || resumeData.projects?.[index]?.title || ""}
          onChange={(e) => updateProject(index, "title", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          placeholder="Brief description of the project"
          rows="3"
          value={project?.description || resumeData.projects?.[index]?.description || ""}
          onChange={(e) => updateProject(index, "description", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Project Link</label>
        <input
          type="url"
          className="form-control"
          placeholder="URL to the project or repository"
          value={project?.link || resumeData.projects?.[index]?.link || ""}
          onChange={(e) => updateProject(index, "link", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          value={project?.startDate || resumeData.projects?.[index]?.startDate || ""}
          onChange={(e) => updateProject(index, "startDate", e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">End Date</label>
        <input
          type="date"
          className="form-control"
          value={project?.endDate || resumeData.projects?.[index]?.endDate || ""}
          onChange={(e) => updateProject(index, "endDate", e.target.value)}
        />
      </div>
    </div>
  ))}
  <button type="button" className="btn btn-primary" onClick={addProject}>
    <FaPlus className="me-2" />
    Add Project
  </button>
</div>

      {/* certificates */}

<div className="mb-4">
  <h2 className="h4">Certifications</h2>
  {data.certifications.map((cert, index) => (
    <div key={index} className="mb-3 border p-3 position-relative">
      <button
        type="button"
        className="btn btn-danger position-absolute top-0 end-0 m-2"
        onClick={() => removeCertification(index)}
      >
        <FaTrash />
      </button>
      <div className="mb-3">
        <label className="form-label">Certification Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Certification Name"
          value={cert?.name ||resumeData.certifications?.[index]?.title|| ''}
          onChange={(e) => updateCertification(index, 'name', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Issuing Organization</label>
        <input
          type="text"
          className="form-control"
          placeholder="Issuing Organization"
          value={cert?.issuingOrganization ||resumeData.certifications?.[index]?.issuedBy|| ''}
          onChange={(e) => updateCertification(index, 'issuingOrganization', e.target.value)}
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Issued Date</label>
        <input
          type="date"
          className="form-control"
          value={cert?.expirationDate ||resumeData.certifications?.[index]?.year|| ''}
          onChange={(e) => updateCertification(index, 'expirationDate', e.target.value)}
        />
      </div>
   
     
    </div>
  ))}
  <button
    type="button"
    className="btn btn-primary"
    onClick={addCertification}
  >
    <FaPlus className="me-2" />
    Add Certification
  </button>
</div>



      {/* languages */}
      {/* <div className="mb-4">
        <h2 className="h4">Languages</h2>
        {data.languages.map((language, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => removeLanguage(index)}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">Language</label>
              <input
                type="text"
                className="form-control"
                placeholder="Language"
                value={language ||resumeData.languages?.[index].languageName|| ''}
                onChange={(e) => updateLanguage(index, e.target.value)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addLanguage}
        >
          <FaPlus className="me-2" />
          Add Language
        </button>
      </div> */}
      
 
      <div className="mb-4">
  <h2 className="h4">Languages</h2>
  
  <div className="mb-3 border p-3 position-relative">
    {/* <button
      type="button"
      className="btn btn-danger position-absolute top-0 end-0 m-2"
      onClick={removeLanguage} // Direct function call without index
    >
      <FaTrash />
    </button> */}

    <div className="mb-3">
      <label className="form-label">Language</label>
      <input
        type="text"
        className="form-control"
        placeholder="Language"
        value={data.languages?.[0]?.languageName || resumeData.languages?.[0]?.languageName || ''}
        onChange={(e) => updateLanguage(e.target.value)}
        />
    </div>
  </div>

  {/* <button
    type="button"
    className="btn btn-primary"
    onClick={addLanguage} // Adds only one language entry
  >
    <FaPlus className="me-2" />
    Add Language
  </button> */}
</div>

      {/* interest */}
 
      {/* <div className="mb-4">
        <h2 className="h4">Interests</h2>
        {data.interests.map((interest, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => removeInterest(index)}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">Interest</label>
              <input
                type="text"
                className="form-control"
                placeholder="Interest"
                value={interest  ||resumeData.interests.intrest[index]|| ''}
                onChange={(e) => updateInterest(index, e.target.value)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addInterest}
        >
          <FaPlus className="me-2" />
          Add Interest
        </button>


             </div> */}


<div className="mb-4">
  <h2 className="h4">Interests</h2>
  {data.interests.map((interest, index) => (
    <div key={index} className="mb-3 border p-3 position-relative">
      <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => removeInterest(index)}
            >
              <FaTrash />
            </button>
      <div className="mb-3">
        <label className="form-label">Interests</label>
        <input
                type="text"
                className="form-control"
                placeholder="Interest"
                value={interest || resumeData.interests?.intrests?.[index] || ""}
                onChange={(e) => updateInterest(index, e.target.value)}
              />
      </div>
    </div>
  ))}
  <button
          type="button"
          className="btn btn-primary"
          onClick={addInterest}
        >
          <FaPlus className="me-2" />
          Add Interest
        </button>
        <h6 className="mt-2">Choose Template</h6>
        <ResumeTemplateQueue/>
         <button className="btn btn-success mt-3" onClick= {isEditing? handleSave : saveResume}>

  Save resume

</button>
</div>
      
      {/* Add more sections like Education, Skills, etc., following the same pattern */}
    </div>

  );
};

export default ResumeForm;









