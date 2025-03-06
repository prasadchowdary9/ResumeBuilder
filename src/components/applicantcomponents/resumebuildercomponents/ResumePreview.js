import React, {useState, useEffect} from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { apiUrl } from '../../../services/ApplicantAPIService';
import { useUserContext } from "../../common/UserProvider";

export const ResumePreview = ({ data }) => {

  const [loading, setLoading] = useState(true);
const [resumeData, setResumeData] = useState({});

    const user = useUserContext()?.user;
  const getSectionStyle = () => {
    const style = data.style?.sectionStyle || 'line';
    switch (style) {
      case 'box':
        return 'border border-2 p-4 rounded';
      case 'underline':
        return 'border-bottom border-2 pb-2 mb-4';
      case 'line':
      default:
        return 'border-top border-2 pt-2 mt-4';
    }
  };

  const primaryColor = data.style?.primaryColor || '#3B82F6';
  const sectionClass = `${getSectionStyle()} mb-4`;
  const fetchResumeData = async () => {
    if (!user?.id) return;

    setLoading(true);
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const response = await fetch(`${apiUrl}/resume-builder/getResume/${user.id}`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      setResumeData({
        ...(data.resumePersonalInfo || {}), // Spread personal info
        experiences: data.resumeExperiences || [], // Ensure experiences is always an array
        educations: data.resumeEducations || [],
        projects: data.resumeProjects || [],
        certifications: data.resumeCertificates || [],
        languages: data.resumeLanguages || [],
        interests: data.resumeIntrest || [],
        skills: data.resumeSkills || [],
        
       
      });
     
    console.log('Full Name:', data.resumePersonalInfo.email || 'No fullname found');
      console.log(data.resumeExperiences);
      console.log(data.resumeExperiences[0].company);


    } catch (error) {
      console.error("Error fetching resume data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumeData();
  }, []);
  return (
    <div id="resume-preview" className="bg-white p-4 shadow h-100 " style={{ color: primaryColor }}>
      {/* Header */}
      <div className="text-center mb-4">
        {/* <h1 className="display-4 text-dark">{data.personalInfo.name|| resumeData.fullName}</h1> */}
        <h1 className="display-4 text-dark">{resumeData.fullName|| ""}</h1>

        <p className="h5 text-secondary mt-2">{data.personalInfo.title || resumeData.role}</p>
        <div className="d-flex justify-content-center gap-3 mt-3 text-secondary">
         
            <div className="d-flex align-items-center gap-1">
              <FiMail size={16} />
             {data.personalInfo.email ||resumeData.email}
            </div>
          
       
            <div className="d-flex align-items-center gap-1">
              <FiPhone size={16} />
              <span>{data.personalInfo.phone|| resumeData.phoneNo}</span>
            </div>
         
          
            <div className="d-flex align-items-center gap-1">
              <FiMapPin size={16} />
              <span>{data.personalInfo.location|| resumeData.address}</span>
            </div>
          
        </div>
      </div>

      {/* Summary */}
    
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Professional Summary</h2>
          <p className="text-dark">{data.personalInfo.summary||resumeData.summary}</p>
        </div>
   



        <div className={sectionClass}>
          <h3 className="h4 text-dark mb-3">LinkedIn</h3>
          <p className="text-dark">{data.personalInfo.linkedin || resumeData.linkedin}</p>
        </div>
    
        <div className={sectionClass}>
          <h3 className="h4 text-dark mb-3">Github</h3>
          <p className="text-dark">{data.personalInfo.github || resumeData.github}</p>
        </div>
    
  
        <div className={sectionClass}>
          <h3 className="h4 text-dark mb-3">Website</h3>
          <p className="text-dark">{data.personalInfo.website || resumeData.website}</p>
        </div>
        
      {/* Experience */}
      {data.experience.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <h3 className="h5 text-dark">{exp.position||resumeData.experiences?.[index]?.jobTitle || ''}</h3>
                <p className="text-secondary">
                  {exp.startDate||resumeData.experiences?.[index]?.startDate || ''} - {exp.endDate||resumeData.experiences?.[index]?.endDate || ''}
                </p>

              </div>
              <p className="text-dark fw-bold">{exp.company ||resumeData.experiences?.[index]?.company || ''}              </p>
              {/* <p className="text-secondary mt-2">{exp.description||resumeData.experiences?.[index]?.company || ''}</p> */}
              {/* <p className="text-secondary mt-2">{exp.duration ||resumeData.experiences?.[index]?.duration || ''}</p> */}
              <p className="text-secondary mt-2">{exp.description ||resumeData.experiences?.[index]?.description || ''}</p>



            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="d-flex justify-content-between align-items-baseline">
                {/* <h3 className="h5 text-dark">
                  {edu.degree|| resumeData.educations[index]?.college|| ""}
                <br/>
                <br/>
                {edu.standard ||resumeData.educations?.[index]?.standard|| ''}
                </h3> */}
         
                <p className="h5 text-dark"></p>

                
                <div className=' row'>
                {/* <p className="text-secondary">{edu.graduationStartDate  ||resumeData.educations[index]?.startYear}</p> */}
                {/* <p className="text-secondary">{edu.graduationDate  ||resumeData.educations[index]?.endYear}</p>

                <p className="text-secondary">{edu.percentage   ||resumeData.educations[index]?.cgpa}</p> */}
                              <p className="text-dark fw-bold">Duration: {edu.graduationStartDate || resumeData.educations[index]?.startYear}-{edu.graduationDate || resumeData.educations[index]?.endYear}</p>


                </div>

              </div>
              <p className="text-dark fw-bold">Degree:{edu.degree ||resumeData.educations?.[index]?.standard|| ''}</p>
              <p className="text-dark fw-bold">Institute:{edu.university || resumeData.educations[index]?.college}</p>
              <p className="text-dark fw-bold">CGPA:{edu.percentage ||resumeData.educations?.[index]?.cgpa|| ''}</p>


            </div>
          ))}
        </div>
      )}

    

      {/* Skills */}
      {data.skills.length >0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Skills</h2>
          <div className="d-flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <p className="text-dark fw-bold"
                key={index}
               
              >
                {skill || resumeData.skills?.technicalSkills[index] || ""}
              </p>
            ))}
          </div>
        </div>
      )}

        {/* Projects */}
        {/* {data.projects.length > 0 && (
  <div className={sectionClass}>
    <h2 className="h4 text-dark mb-3">Projects</h2>
    {data.projects.map((project, index) => (
      <div key={index} className="mb-4">
        <h3 className="h5 text-dark">{project.title||resumeData.projects?.[index].title|| ''}</h3>
        <p className="text-secondary">{project.description ||resumeData.projects?.[index].description|| ''}</p>
        <p className="text-dark"><strong>startDate:</strong>{project.startDate ||resumeData.projects?.[index].startDate|| ''}</p>
        <p className="text-dark"><strong>EndDate:</strong>  {project.endDate ||resumeData.projects?.[index].endDate|| ''}</p>

          <p className="text-dark">
            <strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link ||resumeData.projects?.[index].link|| ''}</a>
          </p>
      </div>
    ))}
  </div>
)} */}
{(data.projects?.length ?? 0) > 0 && (
  <div className={sectionClass}>
    <h2 className="h4 text-dark mb-3">Projects</h2>
    {data.projects.map((project, index) => (
      <div key={index} className="mb-4">
        <h3 className="h5 text-dark">
          {project?.title || resumeData.projects?.[index]?.title || ""}
        </h3>
        <p className="text-secondary">
          {project?.description || resumeData.projects?.[index]?.description || ""}
        </p>
        <p className="text-dark">
          <strong>Start Date:</strong> {project?.startDate || resumeData.projects?.[index]?.startDate || ""}
        </p>
        <p className="text-dark">
          <strong>End Date:</strong> {project?.endDate || resumeData.projects?.[index]?.endDate || ""}
        </p>
        <p className="text-dark">
          <strong>Link:</strong> 
          <a href={project?.link || resumeData.projects?.[index]?.link || ""} target="_blank" rel="noopener noreferrer">
            {project?.link || resumeData.projects?.[index]?.link || ""}
          </a>
        </p>
      </div>
    ))}
  </div>
)}

      {/* Certifications */}

{data.certifications.length > 0 && (
  <div className={sectionClass}>
    <h2 className="h4 text-dark mb-3">Certifications</h2>
    {data.certifications.map((cert, index) => (
      <div key={index} className="mb-4">
        <h3 className="h5 text-dark">{cert?.name||resumeData.certifications?.[index]?.title|| ''}</h3>
        <p className="text-dark"><strong>Issuing Organization:</strong> {cert?.issuingOrganization||resumeData.certifications?.[index]?.issuedBy|| ''}</p>
        <p className="text-secondary">
          <strong>Issued:</strong> 
         <strong>Issued Date:</strong> {cert?.expirationDate||resumeData.certifications?.[index]?.year|| ''}
        </p>
        
      
      </div>
    ))}
  </div>
)}


      {/* Languages */}
      {/* {data.languages?.length > 0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Languages</h2>
          <div className="d-flex flex-wrap gap-2">
            {data.languages.map((languages, index) => (
              <p className="text-dark fw-bold"
                key={index}
               
              >
                {languages||resumeData.languages?.[index].languageName|| ''}
              </p>
            ))}
          </div>
        </div>
      )} */}

  <div className={sectionClass}>
    <h2 className="h4 text-dark mb-3">Languages</h2>
    <div className="d-flex flex-wrap gap-2">
      
        <p className="text-dark fw-bold" >
          {data.languages?.[0]?.languageName || resumeData.languages?.[0]?.languageName || ''}
        </p>
      
    </div>
  </div>

      {/* Interests */}
      {/* {data.interests.length >0 && (

        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Interests</h2>
          <div className="d-flex flex-wrap gap-2">
            {data.interests.map((interest, index) => (
              <span
                key={index}
                className="badge bg-light text-dark"
              >
                {interest ||resumeData.interest.intrests[index]|| ''}
              </span>
            ))}
          </div>
          
        </div>
      )} */}
{data.interests.length >0 && (
        <div className={sectionClass}>
          <h2 className="h4 text-dark mb-3">Interests</h2>
          <div className="d-flex flex-wrap gap-2">
          {data.interests.map((interest, index) => (
              <p className="text-dark fw-bold"
                key={index}
               
              >
              
                {interest|| resumeData.interests?.intrests?.[index] || "" }
                </p>
            ))}
          </div>
        </div>
      )}


      {/* Custom Sections */}
      {data.customSections?.map((section, index) => (
        <div key={index} className={sectionClass}>
          <h2 className="h4 text-dark mb-3">{section.title}</h2>
          <p className="text-dark">{section.content}</p>
        </div>
      ))}
    </div>
  );
};


export default ResumePreview;
