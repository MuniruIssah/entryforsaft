import { Tabs } from "antd";
import React from "react";
import DescriptionStrip from "../../components/DescriptionStrip";
import RFGridWrapper from "../../components/GridWrapper";
import RFQuoteCard from "../../components/QuoteCard";
import RFHeader from "../../components/RFHeader";
import WirdCard from "./components/WirdCard";
import "./styles.css";
import { quotes } from "./utils";

const { TabPane } = Tabs;

const RFWird = () => {
  return (
    <div className="rfQuotes">
      <RFHeader title="Wird" />
      <DescriptionStrip
        title="Wird"
        description="A detailed look at the components of  our wird"
      />
      <Tabs defaultActiveKey="1" centered style={{ margin: "0px 5px" }}>
        <TabPane tab="An-Niyyah" key="1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width:'100%'
            }}
          >
            <WirdCard />
          </div>
        </TabPane>
        <TabPane tab="Al-Faatiha" key="2">
          <div></div>
        </TabPane>
        <TabPane tab="Istigfaar" key="3">
          <div></div>
        </TabPane>
        <TabPane tab="As-Swalaatu-alan-Nabiyyi" key="4">
          <div></div>
        </TabPane>
        <TabPane tab="Kalimat Shahada" key="5">
          <div></div>
        </TabPane>
        <TabPane tab="Jawharatul Kamaal" key="6">
          <div></div>
        </TabPane>
        <TabPane tab="Dua-ul-Khaatim" key="7">
          <div></div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default RFWird;
