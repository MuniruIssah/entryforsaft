import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import React, { useState } from "react";
import { useDiwaniContext } from "../../../../contexts/DiwaniContext";
import "./styles.css";
export const DiwaniAyahCard = ({
  ayah = "أَبَى الْقَلْبُ إِلاَّ أَنْ يَكُونَ مُتَيَّمًا،حَلِيفَ غَرَامٍ بِالنَّبِيِّ مُهَيَّمَــــا",
}) => {
  const [part1, part2] = ayah.split("،");
  return (
    <div className="diwaniAyahCard">
      <span className="arabicText">{part1}</span>
      <span className="arabicText">{part2}</span>
    </div>
  );
};

export const DiwaniChapterCard = ({ title, subtitle }) => {
  const [visible, setVisible] = useState(false);
  const [subT] = subtitle.split("،");
  return (
    <>
      <DiwaniChapterDrawer
        visible={visible}
        setVisible={setVisible}
        title={title}
      />
      <div className="diwaniChapterCard" onClick={() => setVisible(true)}>
        <span className='arabicText'>{title}</span>
        <span  className='arabicText diwaniChapterSubtitle'>{subT}</span>
      </div>
    </>
  );
};

const DiwaniChapterDrawer = ({ visible, title, setVisible }) => {
  const {
    currentChapter: { chapters },
  } = useDiwaniContext();

  return (
    <Drawer
      className="diwaniDrawer"
      headerStyle={{
        direction: "rtl",
        backgroundColor: "#373737",
        color: "whitesmoke",
      }}
      onClose={() => setVisible(false)}
      width="min(500px,100vw)"
      placement="right"
      title={
        <div className="arabicText diwaniDrawerTitle">
          {title}
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => setVisible(false)}
            style={{ color: "grey", cursor: "pointer" }}
          />
        </div>
      }
      visible={visible}
      closable={false}
    >
      {chapters[title].map((item, index) => (
        <DiwaniAyahCard key={index} ayah={item} />
      ))}
    </Drawer>
  );
};
