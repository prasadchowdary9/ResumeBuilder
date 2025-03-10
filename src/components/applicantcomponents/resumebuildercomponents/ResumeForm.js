
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useUserContext } from "../../common/UserProvider";
import ResumeTemplateQueue from "./ResumeTemplateQueue";
import { apiUrl } from "../../../services/ApplicantAPIService";
const ResumeForm = ({data, onChange}) => {
  const [resumeData, setResumeData] = useState({
    resumePersonalInfo: {
      fullName: "",
      email: "",
      phoneNo: "",
      address: "",
      summary: "",
      role: "",
    },
    resumeSkills: {
      technicalSkills: [

      ],
    },
    resumeExperiences: [
      {
        company:"",
        description:"",
        endDate:"",
        jobTitle:"",
        startDate:"",
      },
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
        resumeProjects: [],
    resumeCertificates: [],
    resumeLanguages: [],
    resumeIntrest: { intrests: [] },
  });

  const [isEditing, setIsEditing] = useState(false);
  const user = useUserContext()?.user;

  // useEffect(() => {
  //   if (user?.id,data) {
  //     fetchResumeData();
  //     setResumeData(data);

  //   }
  // }, [user?.id,data]); // Depend only on `user?.id`



  useEffect(() => {
    if (user?.id && data && JSON.stringify(data) !== JSON.stringify(resumeData)) {
      fetchResumeData();
      setResumeData(data);
    }
  }, [user?.id, data]); // Only runs when user?.id or data changes
  
  const jwtToken = localStorage.getItem("jwtToken");


  const fetchResumeData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/resume-builder/getResume/${user.id}`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });

      if (response.data) {
        setResumeData((prev) => ({
          ...prev,
          resumePersonalInfo: {
            ...prev.resumePersonalInfo,  // Keep previous values
            ...response.data.resumePersonalInfo, // Update with API data

          },
          resumeExperiences: response.data.resumeExperiences || [], // Ensure an array
          resumeEducations: response.data.resumeEducations || [], // Ensure educations are also fetched
          resumeSkills: {
            technicalSkills: response.data.resumeSkills?.technicalSkills || [], // Ensure array
          }, resumeProjects: response.data.resumeProjects || [],
          resumeCertificates: response.data.resumeCertificates || [],
          resumeIntrest: {
            intrests: response.data.resumeIntrest?.intrests || [],
          },

          resumeLanguages: response.data.resumeLanguages || [],


        }));
        setIsEditing(true);
      }
    } catch (error) {
      console.error("Error fetching resume:", error);
      setIsEditing(false);
    }
  };

  /** Unified Change Handler */
  // const handleChange = (field, value) => {
  //   setResumeData((prev) => {
  //     const keys = field.split(".");

  //     if (keys.length === 2) {
  //       return {
  //         ...prev,
  //         [keys[0]]: {
  //           ...prev[keys[0]],  // Preserve existing data
  //           [keys[1]]: value,  // Update changed field
  //         },
  //       };
  //     }
  //     return { ...prev, [field]: value };
  //   });
  // };

  const handleChange = (field, value) => {
    setResumeData((prev) => {
      const keys = field.split(".");
      let updatedData;
  
      if (keys.length === 2) {
        updatedData = {
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: value,
          },
        };
      } else {
        updatedData = { ...prev, [field]: value };
      }
  
      onChange(updatedData); // Notify parent about changes
      return updatedData;
    });
  };
  
  const saveResumeData = async () => {
    try {
      const payload = { ...resumeData };
      let response;
      const userData = JSON.parse(localStorage.getItem("user"));


      const jwtToken = userData?.data?.jwt;

      const userId = userData?.id;

      if (isEditing) {
        response = await axios.put(`${apiUrl}/resume-builder/updateResume/${userId}`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        });
      } else {
        response = await axios.post(`${apiUrl}/resume-builder/saveresume/${userId}`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        });
      }

      console.log("API Response:", response.data);
      alert("Resume saved successfully!");
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Error saving resume.");
    }
  };




  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      resumeExperiences: [
        ...prev.resumeExperiences,
        { company: "", position: "", startDate: "", endDate: "", description: "" },
      ],
    }));
  };


  const removeExperience = (index) => {
    setResumeData((prev) => {
      const updatedExperiences = prev.resumeExperiences.filter((_, i) => i !== index);
      
      const updatedData = { ...prev, resumeExperiences: updatedExperiences };
      onChange(updatedData); // Notify parent
      return updatedData;
    });
  };
  


  const updateExperience = (index, field, value) => {
    setResumeData((prev) => {
      const newExperiences = [...prev.resumeExperiences];
      newExperiences[index] = { ...newExperiences[index], [field]: value };
  
      const updatedData = { ...prev, resumeExperiences: newExperiences };
      onChange(updatedData); // Notify parent
      return updatedData;
    });
  };
  


  // Function to update education details
  const updateEducation = (index, field, value) => {
    setResumeData((prev) => {
      const newEducations = [...prev.resumeEducations];
      newEducations[index] = { ...newEducations[index], [field]: value };
  
      const updatedData = { ...prev, resumeEducations: newEducations };
      onChange(updatedData); // Notify parent
      return updatedData;
    });
  };
  
  const removeEducation = (index) => {
    setResumeData((prev) => {
      const updatedEducations = prev.resumeEducations.filter((_, i) => i !== index);
      
      const updatedData = { ...prev, resumeEducations: updatedEducations };
      onChange(updatedData); // Notify parent
      return updatedData;
    });
  };
  

  // Function to add a new education entry
  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      resumeEducations: [
        ...prev.resumeEducations,
        { college: '', standard: '', startYear: '', endYear: '', cgpa: '' }
      ]
    }));
  };


  //// Function to update project details
  const updateProject = (index, updatedProject) => {
    setResumeData((prevData) => {
      const newProjects = prevData.resumeProjects.map((project, i) =>
        i === index ? { ...project, ...updatedProject } : project
      );
      return { ...prevData, resumeProjects: newProjects };
    });
  };


  // Function to add a new project entry
  const addProject = () => {
    const newProjects = [
      ...resumeData.resumeProjects,
      { title: '', description: '', startDate: '', endDate: '', link: '' },
    ];
    setResumeData({ ...resumeData, resumeProjects: newProjects }); // Ensure the key matches the state
  };

  // Function to remove a project entry
  const removeProject = (index) => {
    const newProjects = resumeData.resumeProjects.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, resumeProjects: newProjects }); // Correct the key here too
  };


  // Function to update certification details
  const updateCertification = (index, field, value) => {
    const newCertifications = [...resumeData.resumeCertificates];
    newCertifications[index] = { ...newCertifications[index], [field]: value };

    setResumeData((prev) => ({
      ...prev,
      resumeCertificates: newCertifications,
    }));
  };

  // Function to add a new certification entry
  const addCertification = () => {
    const newCertifications = [
      ...(resumeData.resumeCertificates || []), // Ensure it's an array
      { title: '', issuedBy: '', year: '' },
    ];

    setResumeData((prev) => ({
      ...prev,
      resumeCertificates: newCertifications,
    }));
  };

  // Function to remove a certification entry
  const removeCertification = (index) => {
    const newCertifications = resumeData.resumeCertificates.filter((_, i) => i !== index);

    setResumeData((prev) => ({
      ...prev,
      resumeCertificates: newCertifications,
    }));
  };





  const updateLanguage = (index, value) => {
    const updatedLanguages = [...resumeData.resumeLanguages];
    updatedLanguages[index].languageName = value;

    setResumeData((prev) => ({
      ...prev,
      resumeLanguages: updatedLanguages,
    }));
  };

  const addNewLanguage = () => {
    setResumeData((prev) => ({
      ...prev,
      resumeLanguages: [...(prev.resumeLanguages || []), { languageName: "" }],
    }));
  };



  const removeLanguage = (index) => {
    const updatedLanguages = resumeData.resumeLanguages.filter((_, i) => i !== index);

    setResumeData((prev) => ({
      ...prev,
      resumeLanguages: updatedLanguages,
    }));
  };


  return (
    <div className="container row py-4">
      {/* Personal Information */}
      <div className="mb-4">
        <h2 className="h4">Personal Information</h2>
        <div className="row g-3">
          {/* Existing Fields */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={resumeData.resumePersonalInfo.fullName || ""}  // Show API data or empty string
              onChange={(e) => handleChange("resumePersonalInfo.fullName", e.target.value)}  // Allow user edits
            />


          </div>
          <div className="col-md-6">
            <label className="form-label">Professional Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Professional Title"
              value={resumeData.resumePersonalInfo.role || ""}
              onChange={(e) => handleChange("resumePersonalInfo.role", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"

              value={resumeData.resumePersonalInfo.email || ""}
              onChange={(e) => handleChange("resumePersonalInfo.email", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone"
              value={resumeData.resumePersonalInfo.phoneNo || ""}
              onChange={(e) => handleChange("resumePersonalInfo.phoneNo", e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              value={resumeData.resumePersonalInfo.address || ""}
              onChange={(e) => handleChange("resumePersonalInfo.address", e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Professional Summary</label>
            <textarea
              className="form-control"
              placeholder="Professional Summary"
              rows="3"
              value={resumeData.resumePersonalInfo.summary || ""}
              onChange={(e) => handleChange("resumePersonalInfo.summary", e.target.value)}
            />
          </div>

          {/* New Fields */}
          <div className="col-md-6">
            <label className="form-label">LinkedIn Profile</label>
            <input
              type="url"
              className="form-control"
              placeholder="LinkedIn URL"
              value={resumeData.resumePersonalInfo.linkedin || ""}
              onChange={(e) => handleChange("resumePersonalInfo.linkedin", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">GitHub Profile</label>
            <input
              type="url"
              className="form-control"
              placeholder="GitHub URL"
              value={resumeData.resumePersonalInfo.github || ""}
              onChange={(e) => handleChange("resumePersonalInfo.github", e.target.value)}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Personal Website</label>
            <input
              type="url"
              className="form-control"
              placeholder="Website URL"
              value={resumeData.resumePersonalInfo.website || ""}
              onChange={(e) => handleChange("resumePersonalInfo.website", e.target.value)}
            />
          </div>
        </div>

      </div>

      {/* Experience Section */}
      <div className="mb-4">
        <h2 className="h4">Experience</h2>
        {(resumeData?.resumeExperiences || []).map((exp, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => removeExperience(index)}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-control"
                placeholder="Company"

                value={exp.company}
                onChange={(e) => updateExperience(index, "company", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-control"
                placeholder="Position"
                value={exp.jobTitle}
                onChange={(e) => updateExperience(index, "jobTitle", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g. Jan 2020"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, "startDate", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g. Jan 2020"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, "endDate", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Describe your work experience"
                rows="3"
                value={exp.description}
                onChange={(e) => updateExperience(index, "description", e.target.value)} />
            </div>


          </div>

        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addExperience}
        >
          <FaPlus className="me-2" />
          Add Experience
        </button>
      </div>
      {/* Education Section */}


      <div className="mb-4">
        <h2 className="h4">Education</h2>
        {resumeData.resumeEducations.map((edu, index) => (
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
                value={edu.college}
                onChange={(e) => updateEducation(index, 'college', e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Degree</label>
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                value={edu.standard}
                onChange={(e) => updateEducation(index, 'standard', e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Graduation Start Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g., May 2024"
                value={edu.startYear}
                onChange={(e) => updateEducation(index, 'startYear', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Graduation End Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="e.g., May 2024"
                value={edu.endYear}
                onChange={(e) => updateEducation(index, 'endYear', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CGPA</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g.,9.0"
                value={edu.cgpa}
                onChange={(e) => updateEducation(index, 'cgpa', e.target.value)}
              />
            </div>

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

      <div className="mb-4">
        <h2 className="h4">Skills</h2>
        {resumeData.resumeSkills?.technicalSkills?.map((skill, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => {
                const newSkills = resumeData.resumeSkills.technicalSkills.filter((_, i) => i !== index);
                setResumeData((prev) => ({
                  ...prev,
                  resumeSkills: { ...prev.resumeSkills, technicalSkills: newSkills },
                }));
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
                value={skill || ""}
                onChange={(e) => {
                  const newSkills = [...resumeData.resumeSkills.technicalSkills];
                  newSkills[index] = e.target.value;
                  setResumeData((prev) => ({
                    ...prev,
                    resumeSkills: { ...prev.resumeSkills, technicalSkills: newSkills },
                  }));
                }}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const newSkills = [...(resumeData.resumeSkills?.technicalSkills || []), ""];
            setResumeData((prev) => ({
              ...prev,
              resumeSkills: { ...prev.resumeSkills, technicalSkills: newSkills },
            }));
          }}
        >
          <FaPlus className="me-2" />
          Add Skill
        </button>
      </div>


      {/* <div className="mb-4">
        <h2 className="h4">Projects</h2>
        {resumeData.resumeProjects.map((projects, index) => (
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
                value={projects.title}
                onChange={(e) => updateProject(index, { title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Brief description of the project"
                rows="3"
                value={projects.description}
                onChange={(e) => updateProject(index, { description: e.target.value })}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">Project Link</label>
              <input
                type="url"
                className="form-control"
                placeholder="URL to the project or repository"
                value={projects.link}
                onChange={(e) => updateProject(index, { link: e.target.value })}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                value={projects.startDate}
                onChange={(e) => updateProject(index, { startDate: e.target.value })}

              />
            </div>
            <div className="mb-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                value={projects.endDate}
                onChange={(e) => updateProject(index, { endDate: e.target.value })}

              />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={addProject}>
          <FaPlus className="me-2" />
          Add Project
        </button>
      </div> */}

      {/* certificates */}
{/* 
      <div className="mb-4">
        <h2 className="h4">Certifications</h2>
        {resumeData.resumeCertificates.map((cert, index) => (
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
                value={cert.title}
                onChange={(e) => updateCertification(index, 'title', e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Issuing Organization</label>
              <input
                type="text"
                className="form-control"
                placeholder="Issuing Organization"
                value={cert.issuedBy}
                onChange={(e) => updateCertification(index, 'issuedBy', e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Issued Date</label>
              <input
                type="date"
                className="form-control"
                value={cert.year}
                onChange={(e) => updateCertification(index, 'year', e.target.value)}
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



      <div className="mb-4">
        <h2 className="h4">Languages</h2>

        {resumeData.resumeLanguages?.map((language, index) => (
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
                placeholder="Enter Language"
                value={language.languageName || ""}
                onChange={(e) => updateLanguage(index, e.target.value)}
              />
            </div>
          </div>
        ))}
  <button
          type="button"
          className="btn btn-primary"
          onClick={addNewLanguage}
        >
          <FaPlus className="me-2" />
          Add Language
        </button>
      </div>
 */}


      <div className="mb-4">
        <h2 className="h4">Interests</h2>
        {/* {resumeData.resumeIntrest?.intrests?.map((interest, index) => (
          <div key={index} className="mb-3 border p-3 position-relative">
            <button
              type="button"
              className="btn btn-danger position-absolute top-0 end-0 m-2"
              onClick={() => {
                const newInterests = resumeData.resumeIntrest.intrests.filter((_, i) => i !== index);
                setResumeData((prev) => ({
                  ...prev,
                  resumeIntrest: { ...prev.resumeIntrest, intrests: newInterests },
                }));
              }}
            >
              <FaTrash />
            </button>
            <div className="mb-3">
              <label className="form-label">Interest</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter interest"
                value={resumeData.resumeIntrest?.intrests?.[index] || ""}
                onChange={(e) => {
                  const newInterests = [...resumeData.resumeIntrest.intrests];
                  newInterests[index] = e.target.value;
                  setResumeData((prev) => ({
                    ...prev,
                    resumeIntrest: { ...prev.resumeIntrest, intrests: newInterests },
                  }));
                }}
              />

            </div>
          </div>
        ))} */}

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const newInterests = [...(resumeData.resumeIntrest?.intrests || []), ""];
            setResumeData((prev) => ({
              ...prev,
              resumeIntrest: { ...prev.resumeIntrest, intrests: newInterests },
            }));
          }}
        >
          <FaPlus className="me-2" />
          Add Interest
        </button>

        <h6 className="mt-2">Choose Template</h6>
        <ResumeTemplateQueue />

        <button className="btn btn-success mt-3" onClick={saveResumeData}>
          Save Resume
        </button>
      </div>

      {/* Add more sections like Education, Skills, etc., following the same pattern */}
    </div>

  );
  
};



export default ResumeForm;



