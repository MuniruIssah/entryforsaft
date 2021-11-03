import React ,{useState} from "react";
import "./styles.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import { creations } from "../../../../utils";
import CreateASheikh from "./forms/CreateASheikh";
import CreateAnFAQ from "./forms/CreateAnFAQ";
import CreateAQuote from "./forms/CreateAQuote";
const { Option } = Select;
const StaffCreation = () => {
  const [value, setValue] = useState('sheikh')
  return (
    <div className="staffCreate">
      <h1>Create</h1>
        <div style={{marginBottom:20}}>
          <Select placeholder="Add a new ..." defaultValue={value} onChange={value=>setValue(value)}>
            {creations.map((item, index) => (
              <Option value={item.value} key={index}>{item.title}</Option>
            ))}
          </Select>
          
        </div>
        {value==='sheikh'&&<CreateASheikh/>}
     {value==='faq'&&   <CreateAnFAQ/>}
     {value==='quote'&&  <CreateAQuote/>}

    </div>
  );
};

export default StaffCreation;
