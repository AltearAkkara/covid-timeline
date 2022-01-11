// tabtitle.tsx

import React, { useCallback } from "react";
import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Entry } from "../models/Entry";
import { Patient } from "../models/Patient";
// import { mockEntries } from "../mock/entries";

type Props = {
  patientData: Patient;
  timeline: Entry[]
};

const TimelineInformation: React.FC<Props> = ({ patientData, timeline }) => {
  return (
    <Card
      style={{
        background: "#012d5e",
        padding: "10px",
        borderColor: "#ffc107",
        borderWidth: "1px",
      }}
    >
      <Card.Body>
        <Container>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col
              md={12}
              style={{
                textAlign: "center",
              }}
            >
              <Button
                size="lg"
                style={{
                  color: "#000",
                  background: "#ffc107",
                  padding: "10px",
                }}
              >
                <Row>
                  <p>{patientData.gender}</p>
                </Row>
                <Row>
                  <p>{patientData.age} years old</p>
                </Row>
                <Row>
                  <p>{patientData.occupation}</p>
                </Row>
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            {/* <Chrono items={data} mode="VERTICAL" /> */}
            <h4>Latest News</h4>
            <ul className="timeline">
              {timeline.map((entry: Entry, index: any) => (
                <li key={index}>
                  <a target="_blank" href="https://www.totoprayogo.com/#">
                    {entry._locationType}
                  </a>
                  <a href="#" className="float-right">
                    {entry._timeFrom.toISOString()}
                  </a>
                  <p>{entry._detail}</p>
                </li>
              ))}
            </ul>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col md={12}>
              <Form.Label style={{ color: "#ffc107" }}>
                Visited places
              </Form.Label>
            </Col>
            <Col md={12}>
              <Form.Label style={{ color: "#fff" }}>sorted places</Form.Label>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default TimelineInformation;
