// Nav Bar Components
import NavBar from '../Nav/NavBar';
import NavItems from '../Nav/NavItems';

// About Us Component
import AboutMe from '../Article/AboutUs/AboutMe';
import Resume from '../Article/Resume/Resume';

// React Hooks
import React, { useState } from "react";


export default function MainContent() {
  const [activeItem, setActiveItem] = useState("About");

  function handleClick(itemName) {
    setActiveItem(itemName);
    console.log(itemName);
  }
  return (
    <>
      <div className="main-content">
        <NavBar
          component={NavItems}
          onClick={handleClick}
          activeItem={activeItem}
        />
        <article
          className={`about ${activeItem === "About" ? "active" : ""}`}
          data-page="about"
        >
            <AboutMe />
        </article>
        <article
          className={`resume ${activeItem === "Resume" ? "active" : ""}`}
          data-page="resume"
        >
            <Resume />
        </article>
      </div>
    </>
  );
}
