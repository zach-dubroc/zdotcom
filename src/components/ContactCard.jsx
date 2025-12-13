import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContactCard.css";

function ContactCard() {
  return (
    <aside className="contact-card">
      <img
        className="contact-avatar"
        src="https://zvd-uploads.s3.us-east-1.amazonaws.com/pf.JPG"
        alt="avatar"
      />
      <h2 className="contact-name">zach dubroc</h2>

      <div className="contact-links">
        <a href="mailto:you@example.com">zacharydubroc@outlook.com</a>
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

        {/* project tabs: collapsible tree/dropdown */}
        <details className="projects-tree">
          <summary>Projects</summary>
          <ul>
            <li>
              <Link className="project-links" to="/mca">
                mcgames
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </aside>
  );
}

export default ContactCard;
