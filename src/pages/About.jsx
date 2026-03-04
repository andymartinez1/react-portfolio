import Resume from '../assets/files/Andrew-Martinez-Resume.pdf';
import APIsIcon from '../assets/img/icons/APIs.svg';
import BackendDevelopmentIcon from '../assets/img/icons/Backend-Development.svg';
import ContinuedEducationIcon from '../assets/img/icons/Continued-Education.svg';
import DatabaseIcon from '../assets/img/icons/Database.svg';
import FrontendIntegrationIcon from '../assets/img/icons/Frontend-Integration.svg';
import ScalabilityIcon from '../assets/img/icons/Scalability.svg';
import SecurityIcon from '../assets/img/icons/Security.svg';
import ServerIcon from '../assets/img/icons/Server.svg';

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-section">
          <ul className="about-list">
            <li className="about-item">
              <img src={BackendDevelopmentIcon} alt="backend-developer-icon" />
              <h2>Backend Developer</h2>
              <p>
                I started my journey into the world of development learning different languages and
                immediately grew to enjoy Java and JavaScript. I have since expanded my knowledge to
                include frameworks like Spring and Node.js. My main focus has been creating RESTful
                APIs and prioritizing security.
              </p>
            </li>
            <li className="about-item">
              <img src={FrontendIntegrationIcon} alt="frontend-developer-icon" />
              <h2>Frontend Developer</h2>
              <p>
                Though my passion is backend development, I wanted to show my work in a more visual
                way. I started learning front-end development and have since built several websites
                using HTML, CSS, and JavaScript. I am experienced with libraries and frameworks such
                as React and Angular. I also have experience with Bootstrap and Tailwind.
              </p>
            </li>
            <li className="about-item">
              <img src={ContinuedEducationIcon} alt="continued-education-icon" />
              <h2>Continuing Education</h2>
              <p>
                As technology continues to evolve, I am always looking to educate myself on the
                latest trends and tools. I am currently learning about implementing AI to increase
                efficiency and productivity. I prioritize strengthening my understanding of
                fundamental concepts before utilizing frameworks to assist in development.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="core-competencies">
        <h3 className="core-competencies-title">Core Competencies</h3>
        <div className="competencies-section">
          <ul className="core-competencies-list">
            <li className="core-competencies-item">
              <img src={DatabaseIcon} alt="Database" />
              <p>Database implementation using SQL or NoSQL based on application requirements.</p>
            </li>
            <li className="core-competencies-item">
              <img src={SecurityIcon} alt="Security" />
              <p>
                Security using authentication and authorization. Utilizing JWT, OAuth and
                encryption.
              </p>
            </li>
            <li className="core-competencies-item">
              <img src={APIsIcon} alt="APIs" />
              <p>
                REST APIs utilizing CRUD operations. Implementing security and error handling and
                validation.
              </p>
            </li>
            <li className="core-competencies-item">
              <img src={ScalabilityIcon} alt="Scalability" />
              <p>Scalability using cloud services and microservices.</p>
            </li>
            <li className="core-competencies-item">
              <img src={ServerIcon} alt="Server" />
              <p>Web servers, Version Control Systems, containerization, deployment and CI/CD.</p>
            </li>
            <li className="core-competencies-item">
              <img src={FrontendIntegrationIcon} alt="Frontend Integration" />
              <p>
                Frontend integration using HTML, CSS and JavaScript. Using libraries and frameworks
                such as React, Angular and Thymeleaf for either server-side or client-side
                rendering.
              </p>
            </li>
          </ul>

          <ul className="developer-icons">
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="CSharp Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                alt="Java Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                alt=".NET Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
                alt="Spring Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                alt="Node.js Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
                alt="Microsoft SQL Server Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
                alt="Docker Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original-wordmark.svg"
                alt="Yarn Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                alt="NPM Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg"
                alt="Kubernetes Icon"
              />
            </li>
            <li className="developer-icon">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS Icon"
              />
            </li>
          </ul>
        </div>
      </section>
      <div className="resume">
        <a href={Resume} className="resume-button">
          View Resume
        </a>
      </div>
    </>
  );
}
