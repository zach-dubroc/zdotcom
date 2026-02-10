import "react";
import "../App.css";
import ContactCard from "./ContactCard";

function NavBar() {
  return (
    <div className="container">
      <div className="app-sidebar">
        <div className="sidebar-header">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
