import React, { useState } from "react";

//component
import Crew from "../Crew";
import MovieOverview from "../MovieOverview";

//styles
import { Wrapper, Content, Button, Text } from "./Tab.styles";

const types = ["Overview", "Cast"];
const Tab = ({ movie }) => {
  const [active, setActive] = useState(types[0]);
  return (
    <Wrapper>
      <Content>
        {types.map((type) => (
          <Button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Button>
        ))}
      </Content>
      <Text>
        {active === "Overview" ? <MovieOverview movie={movie} /> : null}
        {active === "Cast" ? (
          <Crew actors={movie.actors} directors={movie.directors} />
        ) : null}
      </Text>
    </Wrapper>
  );
};

export default Tab;
