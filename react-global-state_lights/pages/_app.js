import { useState } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

const allLights = [
  {
    name: "Living Room",
    isOn: false,
  },
  {
    name: "Kitchen",
    isOn: false,
  },
  {
    name: "Bedroom",
    isOn: false,
  },
  {
    name: "Bathroom",
    isOn: false,
  },
  {
    name: "Garage",
    isOn: false,
  },
  {
    name: "Porch",
    isOn: false,
  },
  {
    name: "Garden",
    isOn: false,
  },
  {
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(allLights);
  const [isDimmed, setIsDimmed] = useState(true);

  function handleToggle(name) {
    setIsOn(
      (allLights.find((light) => {
        return light.name === name;
      }).isOn = !isOn)
    );
  }

  function isLightOn(name) {
    const isOn = allLights.find((light) => {
      return light.name === name;
    }).isOn;

    return isOn;
  }

  function howManyLightsOn() {
    let count = 0;
    allLights.map((light) => {
      light.isOn ? count++ : null;
    });
    return count;
  }

  function handleAction(allOff) {
    if (allOff) {
      setIsOn(
        allLights.map((light) => {
          light.isOn = false;
        })
      );
    } else if (!allOff) {
      setIsOn(
        allLights.map((light) => {
          light.isOn = true;
        })
      );
      setIsDimmed(false);
    }
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        isLightOn={isLightOn}
        handleToggle={handleToggle}
        howManyLightsOn={howManyLightsOn}
        handleAction={handleAction}
      />
    </Layout>
  );
}
