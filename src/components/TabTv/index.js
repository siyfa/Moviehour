import React, { useState } from "react";

//component
import TvOverview from "../TvOverview";
import Seasons from "../Seasons";

//styles
import { Wrapper, Content, Button, Text } from "./TabTv.styles";

const types = ["Overview", "Seasons"];
const TabTv = ({ show }) => {
  const [active, setActive] = useState(types[0]);
  console.log(show);
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
        {active === "Overview" ? <TvOverview show={show} /> : null}
        {active === "Seasons" ? <Seasons show={show} /> : null}
      </Text>
    </Wrapper>
  );
};

export default TabTv;
