import React, { useMemo, useState } from "react";
import AppListStripLayout from "../../layouts/AppListStripLayout";
import { Spin, Tabs } from "antd";
import { useDiwaniContext } from "../../contexts/DiwaniContext";
import { DiwaniChapterCard } from "./components/DiwaniCards";
import "./styles.css";
const { TabPane } = Tabs;
const Diwani = () => {
  const { currentChapter, rank, changeRank, loading } = useDiwaniContext();
  const [visible, setVisible] = useState(false);

  const allChapterNames = useMemo(() => {
    if (currentChapter) {
      return Object.keys(currentChapter.chapters);
    }
  }, [currentChapter]);

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
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText"> إِكْسِيرُ السَّعَاداتِ</span>}
          key="2"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">سَلْوَةُ الشُّجُونِ</span>}
          key="3"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">أَوْثَقُ الْعُرَى</span>}
          key="4"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">شِفَاءُ الْأَسْقَامِ</span>}
          key="5"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">مَنَاسِكُ أَهْلِ الْوِدادِ</span>}
          key="6"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">كَنْزُ الْعَارِفِينَ</span>}
          key="7"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>{" "}
        <TabPane
          tab={<span className="arabicText">نُورُ الْحَقِّ</span>}
          key="8"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
        <TabPane
          tab={<span className="arabicText">سَيْرُ الْقَلْبِ</span>}
          key="9"
        >
          <div className="diwaniTabInner">
            {loading ? (
              <Spin style={{ marginTop: "2rem" }} />
            ) : (
              allChapterNames?.map((chapterName) => (
                <DiwaniChapterCard key={chapterName} title={chapterName} />
              ))
            )}
          </div>
        </TabPane>
      </Tabs>
    </AppListStripLayout>
  );
};

export default Diwani;
