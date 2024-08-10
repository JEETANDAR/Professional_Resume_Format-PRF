export default function NavItems({ itemName, isActive, onClick }) {
    return (
      <li className="navbar-item">
        <button
          className={isActive ? "navbar-link" : "navbar-link active"}
          data-nav-link={itemName}
          onClick={onClick}
        >
          {itemName}
        </button>
      </li>
    );
  }
  