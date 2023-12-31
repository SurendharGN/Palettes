import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker