import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiHtml5, DiCss3, DiDatabase } from "react-icons/di";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { SiRedux, SiVeeam, SiSalesforce, SiJavascript } from "react-icons/si";
import { TbBrandCarbon, TbBrandNextjs } from "react-icons/tb";

const Techstack = () => {
  return (
    <div style={{ color: "white", paddingBottom: "50px", display: "flex" }}>
      {/* Technology Icons Section */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVeeam />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCarbon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
    </div>
  );
};

export default Techstack;
