import { Col, Input, Row, Button, Divider, message } from "antd";
import React, { useState } from "react";
import AppListStripLayout from "../../layouts/AppListStripLayout";
import {
  arabicConsonantsAndSounds,
  arabicVowelsAndSounds,
  transliterate,
} from "./utils";
import "./styles.css";
const Transliterator = () => {
  const [results, setResults] = useState("Results to show here...");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <AppListStripLayout
      title="Transliterator"
      descriptionTitle="Transliterator"
      description="Transliterate anything Arabic"
    >
      <div className="wrapper">
        <div className="transliteratorSection">
          <h4>ARABIC</h4>
          <Input
            placeholder="Enter an arabic word"
            style={{ marginBottom: "1rem" }}
            size="large"
            value={input}
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              if (input.length > 0) {
                setResults(transliterate(input));
              } else {
                message.info("Please input an arabic word..");
              }
            }}
            type="primary"
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#404040",
              borderRadius: 5,
              border: "none",
            }}
          >
            Transliterate
          </Button>
          <p>
            Please this feature is under construction. As such the text should
            be limited to a word. The word should be without a madd and alif wa laam
          </p>
        </div>
        <div className="transliteratorSection">
          <h4>TRANSLITERATION</h4>
          <div className="results">{results}</div>
        </div>
      </div>
    </AppListStripLayout>
  );
};

export default Transliterator;

/* <Row>
        <Col md={12} xs={24}>
          <div className="transliteratorSection">
            <h3>ARABIC</h3>
            <Input
              placeholder="Enter your arabic text here"
              style={{ marginBottom: "1rem" }}
            />
            <Button
              type="primary"
              style={{ alignSelf: "flex-end", backgroundColor: "#404040",borderRadius:5,border:'none' }}
            >
              Transliterate
            </Button>
            <p>
              Please this feature is under construction.
              As such the text should be limited to a word. The word should be without a madd
            </p>
           <Divider></Divider>
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className="transliteratorSection">
            <h3>TRANSLITERATION</h3>
            <div className="results"></div>
          </div>
        </Col>
      </Row> */
