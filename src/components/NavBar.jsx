import React from "react";
import "../App.css";
import ContactCard from "./ContactCard";

function NavBar() {
  return (
    <div className="container">
      <aside className="app-sidebar">
        <div className="sidebar-header">
          <ContactCard />
        </div>
      </aside>
    </div>
  );
}

export default NavBar;
