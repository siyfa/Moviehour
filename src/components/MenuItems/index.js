import React, { useContext } from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./MenuItems.styles";
//context
import { Context } from "../../context";

const MenuItems = ({ menuBar }) => {
  const [user] = useContext(Context);
  return (
    <Wrapper>
      <Content>
        <div className="nav-menu">
          <Link to="/movies">
            <span className="login" onClick={menuBar}>
              Movies
            </span>
          </Link>
          <Link to="/tv">
            <span className="login" onClick={menuBar}>
              {" "}
              Tv Shows
            </span>
          </Link>
          <div className="login">
            {user ? (
              <span>Welcome {user.username}</span>
            ) : (
              <Link to="/login">
                <span onClick={menuBar}>Log in</span>
              </Link>
            )}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default MenuItems;
