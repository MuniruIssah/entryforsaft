import { Button, Form, Input, Select, Row, Col } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const CreateAnFAQ = () => {
  const [faqState, setFaqState] = useState({
    question: "",
    answer: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    setFaqState({ ...faqState, [id]: value });
  };
  return (
    <Form layout="vertical">
      <h2>Add An FAQ</h2>
      <Row>
        <Col xs={24} md={10}>
          <Form.Item label="Question">
            <Input
              size="large"
              value={faqState.question}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={10}>
          <Form.Item label="Answer">
            <Input.TextArea value={faqState.answer} onChange={handleChange} />
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

export default CreateAnFAQ;
