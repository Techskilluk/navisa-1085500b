import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/">
        <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
      </Link>
      <span className="text-2xl font-bold text-white">Navisa</span>
    </div>
  );
};

export default NavLogo;