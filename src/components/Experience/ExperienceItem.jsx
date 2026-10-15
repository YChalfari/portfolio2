import './ExperienceItem.css';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">
          <span className="experience-role">{experience.role}</span>
          {experience.companyUrl ? (
            <a 
              href={experience.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="experience-company"
            >
              {' @ '}{experience.company}
            </a>
          ) : (
            <span className="experience-company"> @ {experience.company}</span>
          )}
        </h3>
        <span className="experience-date">{experience.date}</span>
      </div>
      {experience.note && <p className="experience-note">{experience.note}</p>}
      <ul className="experience-details">
        {experience.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      
      {experience.techStack && experience.techStack.length > 0 && (
        <div className="experience-tech-stack">
          <h4 className="experience-tech-title">Technologies:</h4>
          <div className="tech-stack-tags">
            {experience.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
      
      {experience.images && experience.images.length > 0 && (
        <div className="experience-images">
          <h4 className="experience-images-title">Project Images:</h4>
          <div className="images-gallery">
            {experience.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="experience-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
      
      {experience.links && experience.links.length > 0 && (
        <div className="experience-links">
          <h4 className="experience-links-title">Links:</h4>
          <div className="links-list">
            {experience.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                {link.label}
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;

