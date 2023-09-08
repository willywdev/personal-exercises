import { useState } from "react";
import Layout from "../components/Layout";
import GlobalStyle from "../styles";

const allLights = [
  {
    name: "Living Room",
    isOn: false,
    id: 1,
  },
  {
    name: "Kitchen",
    isOn: false,
    id: 2,
  },
  {
    name: "Bedroom",
    isOn: false,
    id: 3,
  },
  {
    name: "Bathroom",
    isOn: false,
    id: 4,
  },
  {
    name: "Garage",
    isOn: false,
    id: 5,
  },
  {
    name: "Porch",
    isOn: false,
    id: 6,
  },
  {
    name: "Garden",
    isOn: false,
    id: 7,
  },
  {
    name: "Office",
    isOn: false,
    id: 8,
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
