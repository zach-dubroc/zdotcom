import "react";
import { Link } from "react-router-dom";
import "../styles/ContactCard.css";

function ContactCard() {
  return (
    <div className="contact-card">
      <h2 className="contact-name">zach dubroc</h2>
      <div className="contact-links">
        <a href="mailto:zacharydubroc@outlook.com">email</a>
        <a
          href="https://github.com/zach-dubroc"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/zach-dubroc"
          target="_blank"
          rel="noreferrer"
        >
          linkedIn
        </a>
          <a
              className="resume-link"
              href="../../assets/zacharydubroc_resume.pdf"
          >
              resume
          </a>

        <details className="projects-tree">
          <summary>projects</summary>
          <ul>
            <li>
              <Link className="project-links" to="/mca">
                mcgames
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}

export default ContactCard;
