import {Col, Row} from 'antd';
import React from 'react';
import FilterButton from '../FilterButton';
import './styles.css';
const RFFilterAndGrid = ({filterList, children}) => {
  return (
    <Row className="rfFilterAndGrid">
      <Col md={4} xs={0} className="filterSection">
        <div className="filterSectionInner">
        {filterList.map(item => (
          <FilterButton {...item} key={item.label} />
        ))}
        </div>
      </Col>
      <Col md={20} xs={24} className="gridSection">
        <Row>
          <Col></Col>
        </Row>
        {children}
      </Col>
    </Row>
  );
};

export default RFFilterAndGrid;
