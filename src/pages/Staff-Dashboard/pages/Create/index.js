import React from "react";
import "./styles.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import { creations } from "../../../../utils";
const { Option } = Select;
const StaffCreation = () => {
  return (
    <div className="staffCreate">
      <h1>Create</h1>
      <div>
        <div>
          <Select placeholder="Select an option to create">
            {creations.map((item, index) => (
              <Option value={item.value} key={index}>{item.title}</Option>
            ))}
          </Select>
          <Button type="primary" icon={<PlusOutlined />}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StaffCreation;
