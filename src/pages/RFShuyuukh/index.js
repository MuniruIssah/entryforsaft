import React, { useState } from "react";
import RFHeader from "../../components/RFHeader";
import DescriptionStrip from "../../components/DescriptionStrip";
import FilterAndGrid from "../../components/FilterAndGrid";
import "./styles.css";
import { Filters, Shuyuukh } from "./utils";
import RFGridWrapper from "../../components/GridWrapper";
import RFSheikhListItem from "../../components/SheikhListItem";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import RFSheikhCard from "../../components/SheikhCard";
const RFShuyuukh = () => {
  const [list, setList] = useState(true);
  return (
    <div className="rfAskUs">
      <RFHeader title="Shuyuukh" />
      <DescriptionStrip
        title="Shuyuukh"
        description="All The Sheikhs of our beloved path"
      />
      <FilterAndGrid filterList={Filters}>
        <div className="viewControlStrip">
          <IconBlock onClick={() => setList(true)}>
            <UnorderedListOutlined />
          </IconBlock>
          <IconBlock onClick={() => setList(false)}>
            <AppstoreOutlined />
          </IconBlock>
        </div>
        <RFGridWrapper>
          {Shuyuukh.map((sheikh) =>
            list ? (
              <RFSheikhListItem key={sheikh.name} {...sheikh} />
            ) : (
              <RFSheikhCard key={sheikh.name} {...sheikh} />
            )
          )}
        </RFGridWrapper>
      </FilterAndGrid>
    </div>
  );
};

export default RFShuyuukh;

const IconBlock = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="iconBlock">
      {children}
    </div>
  );
};
