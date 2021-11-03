import { Button, Form, Input, Select, Row, Col } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const CreateAQuote = () => {
  const [quoteState, setQuoteState] = useState({
    author: "",
    reference: "",
    quote: "",
  });
  return (
    <Form
      //   style={{ width: "100%" }}
      layout="vertical"
      //   onFinish={handleQuoteSubmit}
    >
      <h2>Add A Quote</h2>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item label="Sheikh's Name">
            <Input
              size="large"
              value={quoteState.author}
              onChange={(e) => {
                setQuoteState({
                  ...quoteState,
                  author: e.target.value,
                });
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item label="Quote">
            <Input.TextArea
              value={quoteState.quote}
              onChange={(e) => {
                setQuoteState({
                  ...quoteState,
                  quote: e.target.value,
                });
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12}>
          <Form.Item label="Reference (if any)">
            <Input
              size="large"
              value={quoteState.reference}
              onChange={(e) => {
                setQuoteState({
                  ...quoteState,
                  reference: e.target.value,
                });
              }}
            />
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

export default CreateAQuote;
