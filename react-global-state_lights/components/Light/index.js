import { Icon, LightButton, Name, State, Text } from "./Light.styled";

export default function Light({ name, handleToggle, isLightOn }) {
  const isOn = isLightOn(name);
  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(name);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
