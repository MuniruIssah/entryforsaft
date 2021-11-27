import React, { useCallback, useMemo, useState } from "react";
import AppListStripLayout from "../../layouts/AppListStripLayout";
import { Spin, Tabs } from "antd";
import { useDiwaniContext } from "../../contexts/DiwaniContext";
import { DiwaniChapterCard } from "./components/DiwaniCards";
import "./styles.css";
import UnderConstruction from "../../components/UnderConstruction";
const { TabPane } = Tabs;
const Diwani = () => {
  const { currentChapter, rank, changeRank, loading } = useDiwaniContext();
  const [visible, setVisible] = useState(false);

  const allChapterNames = useMemo(() => {
    if (currentChapter) {
      return Object.keys(currentChapter.chapters);
    }
  }, [currentChapter]);

  const subtitle = useCallback(
    (chapterName) => {
      if (currentChapter) {
        const [part1, ...rest] =
          currentChapter?.chapters[chapterName][0].split("،");
        return part1;
      }
    },
    [currentChapter]
  );

  return (
    <AppListStripLayout
      title="Diwani"
      descriptionTitle="Diwani"
      description="All the chapters of this wonderful book of praises"
    >
      <Tabs
        activeKey={rank.toString()}
        centered
        style={{ margin: "0px 5px" }}
        onChange={(value) => changeRank(parseInt(value))}
      >
        <TabPane
          tab={<span className="arabicText">تَيسِيرُ الوُصُولِ</span>}
          key="1"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText"> إِكْسِيرُ السَّعَاداتِ</span>}
          key="2"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">سَلْوَةُ الشُّجُونِ</span>}
          key="3"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">أَوْثَقُ الْعُرَى</span>}
          key="4"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">شِفَاءُ الْأَسْقَامِ</span>}
          key="5"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">مَنَاسِكُ أَهْلِ الْوِدادِ</span>}
          style={{ overflowY: "scroll" }}
          key="6"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">كَنْزُ الْعَارِفِينَ</span>}
          style={{ overflowY: "scroll" }}
          key="7"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>{" "}
        <TabPane
          tab={<span className="arabicText">نُورُ الْحَقِّ</span>}
          key="8"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">سَيْرُ الْقَلْبِ</span>}
          key="9"
          style={{ overflowY: "scroll" }}
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : allChapterNames.length > 0 ? (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard
                  key={chapterName}
                  title={chapterName}
                  subtitle={subtitle(chapterName)}
                />
              ))
            ) : (
              <UnderConstruction />
            )}
          </div>
        </TabPane>
      </Tabs>
    </AppListStripLayout>
  );
};

export default Diwani;
