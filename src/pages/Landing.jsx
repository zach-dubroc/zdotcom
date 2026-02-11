import "react";
import { Link } from "react-router-dom"
import "../App.css";
import "../styles/zCalc.css";
import "../styles/ContactCard.css";
//import NavBar from "../components/NavBar";
import ContactCard from "../components/ContactCard";
function Landing() {
  return (
    <div className="app-content">
      <div>
        {/*<NavBar />*/}
              <ContactCard />
              <div className="contact-links">
              <details className="projects-tree">
                  <summary>projects</summary>
                  <ul>
                      <li>
                          <Link className="project-links" to="/mca">
                              mcgames
                          </Link>
                      </li>
                        
                      <li>
                          <Link className="project-links" to="/qalc">
                          q.a.l.c.
                          </Link>
                      </li>
                  </ul>
              </details>
              </div>
        {/*<ZScaleCalc />*/}
      </div>
    </div>
  );
}

export default Landing;
