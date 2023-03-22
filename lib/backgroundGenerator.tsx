import { Chance } from "chance";
import { useState } from "react";
import { getEdgePoint } from "./helpers";

interface useBackgroundReturn {
  regenerate: () => void;
  backgrounds: string[];
}

const chance = Chance();
const palettes = [
  //   ["#5e1e1e", "#141414", "#400000", "#7a0000", "#2b0059", "#000c59", "#850082", "#850052"],
  ["#ed625d", "#42b6c6", "#f79f88", "#446ba6", "#4b95f0", "#d16ba5"],
];

const generateBackground = (): string[] => {
  const palette = chance.pick(palettes);
  return Array(5)
    .fill(null)
    .map(() => chance.pickone(palette))
    .map((color) => {
      const [x, y] = getEdgePoint(
        chance.integer({ min: 0, max: 400 }),
        100,
        100
      );
      return `radial-gradient(farthest-corner at ${x}% ${y}%, ${color}, transparent 100%)`;
    });
};

const useBackground = (): useBackgroundReturn => {
  const [background, setBackground] = useState(generateBackground());

  const regenerate = () => {
    setBackground(generateBackground());
  };

  return {
    regenerate,
    backgrounds: background,
  };
};

export default useBackground;