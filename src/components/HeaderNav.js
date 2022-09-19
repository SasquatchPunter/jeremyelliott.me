import { NavLink } from "react-router-dom";

/**
 * Main site nav with NavLinks
 */
function HeaderNav() {
  return (
    <header className="fixed h-20 w-full top-0 border-b px-20 flex items-center justify-between">
      <NavLink to="/">
        <h1 className="text-2xl">
          J<span className="text-xl">eremy</span> E
          <span className="text-xl">lliott</span>
        </h1>
      </NavLink>
      <NavLink to="/blog">My Blog</NavLink>
    </header>
  );
}
export default HeaderNav;
