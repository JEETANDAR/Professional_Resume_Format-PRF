import React from 'react';

const menuItems = ["About", "Resume", "TechSpace", "Contact"];
const otherOptionsToAdd = [, "Portfolio", "Blog"];

export default function NavBar({ component: Component, onClick, activeItem }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menuItems.map((itemName) => (
          <Component
            key={itemName}
            itemName={itemName}
            isActive={itemName === activeItem}
            onClick={() => onClick(itemName)}
          />
        ))}
      </ul>
    </nav>
  );
}
