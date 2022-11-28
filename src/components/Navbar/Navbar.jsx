import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navBar">
      <NavLink to="/" as={NavLink}>
        Home
      </NavLink>
      <NavLink to="/Wizardkind" as={NavLink}>
        Wizardkind
      </NavLink>
      <NavLink to="/Spells" as={NavLink}>
        Spells
      </NavLink>
      <NavLink to="/Houses" as={NavLink}>
        Houses
      </NavLink>
    </nav>
  );
}

export default Navbar;
