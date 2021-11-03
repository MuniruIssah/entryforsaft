import { Form, Button, Input, Select, Row, Col } from "antd";
import React,{useState} from "react";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const CreateASheikh = () => {
    const [sheikhState, setSheikhState] = useState({
        name: "",
        towm: "",
        country: "",
      });
      const handleChange = (e) => {
        const { value, id } = e.target;
        setSheikhState({ ...sheikhState, [id]: value });
      };
  return (
    <Form layout="vertical">
      <h2>Add A Sheikh</h2>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item label="Name">
            <Input size="large" id="name" onChange={handleChange} value={sheikhState.name} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item label="Town">
          <Input size="large" id="town" onChange={handleChange} value={sheikhState.town} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item label="Country">
            <Select size="large" id="country">
              <Option></Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" icon={<PlusOutlined />}>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateASheikh;
