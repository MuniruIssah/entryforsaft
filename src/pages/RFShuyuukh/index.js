import React, { useState, useEffect } from "react";
import RFHeader from "../../components/RFHeader";
import DescriptionStrip from "../../components/DescriptionStrip";
import FilterAndGrid from "../../components/FilterAndGrid";
import "./styles.css";
import { Shuyuukh } from "./utils";
import RFGridWrapper from "../../components/GridWrapper";
import RFSheikhListItem from "../../components/SheikhListItem";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import RFSheikhCard from "../../components/SheikhCard";
import { Col, Empty, notification, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const RFShuyuukh = () => {
  //states
  const [list, setList] = useState(true);
  const [sheikhs, setSheikhs] = useState([...Shuyuukh]);
  const [filterBy, setFilterBy] = useState("all");

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
  };

  //side effect to filter the Shuyuukh List by country
  useEffect(() => {
    if (filterBy === "all") setSheikhs([...Shuyuukh]);
    else setSheikhs(Shuyuukh.filter((sheikh) => sheikh.country === filterBy));
  }, [filterBy]);

  //All Filters
  const Filters = [
    {
      label: "All Sheikhs",
      active: filterBy === "all" ? true : false,
      onFilter: handleFilterChange,
    },
    {
      label: "Morocco",
      active: filterBy === "Morocco" ? true : false,
      onFilter: handleFilterChange,
    },
    {
      label: "Senegal",
      active: filterBy === "Senegal" ? true : false,
      onFilter: handleFilterChange,
    },
    {
      label: "Ghana",
      active: filterBy === "Ghana" ? true : false,
      onFilter: handleFilterChange,
    },
    {
      label: "Nigeria",
      active: filterBy === "Nigeria" ? true : false,
      onFilter: handleFilterChange,
    },
  ];
  useEffect(() => {
    notification.warning({
      message: "Important Notice",
      duration: 0,
      placement: "bottomRight",
      description:
        "Please note that this list is not in any order, and the team are working at new features",
    });
  }, []);
  return (
    <div className="rfAskUs">
      <RFHeader title="Shuyuukh" />
      <DescriptionStrip
        title="Shuyuukh"
        description="All The Sheikhs of our beloved path"
      />
      <FilterAndGrid filterList={Filters}>
        <div className="viewControlStrip">
          <IconBlock onClick={() => setList(true)} active={list}>
            <UnorderedListOutlined />
          </IconBlock>
          <IconBlock onClick={() => setList(false)} active={!list}>
            <AppstoreOutlined />
          </IconBlock>
        </div>
        <RFGridWrapper>
          {sheikhs.length > 0 ? (
            <>
              {sheikhs.map((sheikh) =>
                list ? (
                  <RFSheikhListItem key={sheikh.name} {...sheikh} />
                ) : (
                  <RFSheikhCard key={sheikh.name} {...sheikh} />
                )
              )}
            </>
          ) : (
            <Empty description="There are no sheikhs yet" />
          )}
        </RFGridWrapper>
        <Row>
          <Col md={0} xs={24}>
            <div className="bottomFilters">
              {Filters.map((item) => (
                <MobileFilterButton key={item.label} {...item} />
              ))}
            </div>
          </Col>
        </Row>
      </FilterAndGrid>
    </div>
  );
};

export default RFShuyuukh;

const IconBlock = ({ children, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`iconBlock ${active ? "activeIcon" : ""}`}
    >
      {children}
    </div>
  );
};

const MobileFilterButton = ({ icon, label, active, onFilter }) => {
  return (
    <button
      type="button"
      onClick={() => (label === "All Sheikhs" ? onFilter("all") : onFilter(label))}
      className={`mobileFilterButton ${active ? "activeMFButton" : ""}`}
    >
      {label}
    </button>
  );
};
