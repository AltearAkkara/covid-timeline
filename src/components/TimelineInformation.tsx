// tabtitle.tsx

import React, { useCallback } from "react";
import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Entry } from "../models/Entry";
import { Patient } from "../models/Patient";
// import { mockEntries } from "../mock/entries";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import _ from "lodash";

type Props = {
  patientData: Patient;
  timeline: Entry[];
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
            <Timeline>
              {patientData.timeline.map((entry: Entry, index: any) => (
                <TimelineItem>
                  <TimelineOppositeContent color="#ffc107">
                    {entry._timeFrom.toLocaleDateString()}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card>
                    {entry._detail}
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            {/* <Chrono items={data} mode="VERTICAL" /> */}
            {/* <h4>Latest News</h4>
            <ul className="timeline">
              {patientData.timeline.map((entry: Entry, index: any) => (
                <li key={index}>
                  <a target="_blank" href="https://www.totoprayogo.com/#">
                    {entry._locationType}
                  </a>
                  <a href="#" className="float-right">
                    {entry._timeFrom.toLocaleDateString()}
                  </a>
                  <p>{entry._detail}</p>
                </li>
              ))}
            </ul> */}
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
              <li style={{ color: "#fff" }}> {getVisitedPlaces(patientData)} </li>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

const getVisitedPlaces = (patient: Patient) => {
  const places = _.map(patient.timeline, (entry) => {
    return `${entry._location}     `
  });
  const uniqePlaces = _.sortedUniq(places);
  return uniqePlaces.toString();
};

export default TimelineInformation;
