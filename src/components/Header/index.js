import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//components
import MenuItems from "../MenuItems";
//Images
import MenuBar from "../../images/icons8-menu.svg";
//styles
import { Wrapper, Content, Menu } from "./Header.styles";
//context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  const [menu, setMenu] = useState(false);
  const menuBar = () => {
    menu === true ? setMenu(false) : setMenu(true);
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h2>Movie Hour</h2>
        </Link>
        <div className="top-left">
          <div className="nav">
            <Link to="/movies">
              <span className="login">Movies</span>
            </Link>
            <Link to="/tv">
              <span className="login"> Tv Shows</span>
            </Link>
          </div>
          <div className="user">
            {user ? (
              <span className="login">Welcome {user.username}</span>
            ) : (
              <Link to="/login">
                <span className="login">Log in</span>
              </Link>
            )}
          </div>
        </div>
        <Menu src={MenuBar} alt="menu-bar" onClick={menuBar} />
        {menu && <MenuItems menuBar={menuBar} />}
      </Content>
    </Wrapper>
  );
};

export default Header;
