import React, { useContext } from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./MenuItems.styles";
//context
import { Context } from "../../context";

const MenuItems = () => {
  const [user] = useContext(Context);
  return (
    <Wrapper>
      <Content>
        <div className="nav-menu">
          <Link to="/movies">
            <span className="login">Movies</span>
          </Link>
          <Link to="/tv">
            <span className="login"> Tv Shows</span>
          </Link>
          {user ? (
            <span className="login">Welcome {user.username}</span>
          ) : (
            <Link to="/login">
              <span className="login">Log in</span>
            </Link>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};

export default MenuItems;
