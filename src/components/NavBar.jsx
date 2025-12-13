import React from "react";
import "../App.css";
import ContactCard from "./ContactCard";

function NavBar() {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <ContactCard />
      </div>
    </aside>
  );
}

export default NavBar;
