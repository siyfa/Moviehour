import React, { useState, useEffect, useRef } from "react";
import PropsTypes from "prop-types";

//Image
import serachIcon from "../../images/search-icon.svg";

//styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={serachIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropsTypes.func,
};

export default SearchBar;
