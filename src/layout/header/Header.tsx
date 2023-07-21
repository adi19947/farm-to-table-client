import React from "react";
import { MenuProvider } from "../../context/MenuProvider";
import NavBar from "./topNavBar/NavBar";

const Header: React.FC = () => {
  return (
    <div>
      <MenuProvider>
        <NavBar />
      </MenuProvider>
    </div>
  );
};

export default Header;
