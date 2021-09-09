import { Button, Radio } from "antd";
import React, { useState } from "react";
import "./styles.css";
const options = [
  { label: "Arabic", value: "arabic" },
  { label: "Translation", value: "translation" },
  { label: "Transliteration", value: "transliteration" },
];
const WirdCard = (props) => {
  const [mode, setMode] = useState("arabic");
  return (
    <div className="wirdCardWrapper">
      {/* <Radio.Group options={options} value={mode} optionType="button" buttonStyle="solid" /> */}
      <div className="wirdCardControls">
        <Button size="small" className="wirdLang activeWirdLang">
          Arabic
        </Button>
        <Button size="small" className="wirdLang">
          Traslation
        </Button>
        <Button size="small" className="wirdLang">
          Transliteration
        </Button>
      </div>
      <div className="wirdCardDetails"></div>
    </div>
  );
};

export default WirdCard;
