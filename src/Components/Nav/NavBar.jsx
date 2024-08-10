import React from 'react';

const menuItems = ["About", "Resume"];
const otherOptionsToAdd = [, "Portfolio", "Blog", "Contact"];

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
