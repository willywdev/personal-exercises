import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ handleToggle, isLightOn }) {
  return (
    <StyledLights>
      <li>
        <Light
          name="Living Room"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
      <li>
        <Light
          name="Kitchen"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
      <li>
        <Light
          name="Bedroom"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
      <li>
        <Light
          name="Bathroom"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
      <li>
        <Light
          name="Garage"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
      <li>
        <Light name="Porch" handleToggle={handleToggle} isLightOn={isLightOn} />
      </li>
      <li>
        <Light
          name="Garden"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
      <li>
        <Light
          name="Office"
          handleToggle={handleToggle}
          isLightOn={isLightOn}
        />
      </li>
    </StyledLights>
  );
}
