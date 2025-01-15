import { Link } from "react-router-dom";

interface NavLinksProps {
  onLinkClick?: () => void;
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/pathways", label: "Pathways" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/eligibility", label: "Check your eligibility" },
];

const NavLinks = ({ onLinkClick }: NavLinksProps) => {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-white/80 hover:text-white transition-colors"
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;