import { node, object, string } from "prop-types";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavBarLinkProps {
  to: string;
  children: ReactNode;
  sx?: object;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ to, children, sx }) => {
  return (
    <Link to={to} style={{ ...sx, textDecoration: "none" }}>
      {children}
    </Link>
  );
};

NavBarLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
  sx: object,
};

NavBarLink.defaultProps = {
  sx: { color: "black" },
};

export default NavBarLink;
