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
  onRemovePatientTimeline: (entry: Entry) => void
};

const TimelineInformation: React.FC<Props> = ({ patientData, onRemovePatientTimeline }) => {
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
              {groupedTimeline(patientData).map(
                (groupEntry: any, index: number) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent
                      color="#ffc107"
                      style={{ flex: 0.1 }}
                    >
                      {groupEntry[0].entryDate}
                      {/* {entry._timeFrom.toLocaleDateString()} */}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="warning" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Card
                        style={{
                          background: "#254870",
                          padding: "10px",
                          borderColor: "#254870",
                          borderWidth: "2px",
                        }}
                      >
                        <Container>
                          {groupEntry.map(
                            (entry: Entry, indexEntry: number) => (
                              <Row key={indexEntry}>
                                <Col md={4}>
                                  <h6 style={{ color: "#ffc107" }}>
                                    {entry.entryFromTime +
                                      "-" +
                                      entry.entryToTime}
                                  </h6>
                                </Col>
                                <Col md={7}>
                                  <Row>
                                    <h6 style={{ color: "#fff" }}>
                                      {entry._detail}
                                    </h6>
                                  </Row>
                                  <Row>
                                    <h6 style={{ color: "#5882E3" }}>
                                      {entry._locationType +
                                        "-" +
                                        entry._location}
                                    </h6>
                                  </Row>
                                </Col>
                                <Col md={1}>
                                  {/* <span className="close">x</span> */}
                                  <Button variant="text" onClick={() => {onRemovePatientTimeline(entry)}}>X</Button>
                                </Col>
                              </Row>
                            )
                          )}
                        </Container>
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                )
              )}
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
              <h6 style={{ color: "#fff" }}>{getVisitedPlaces(patientData)}</h6>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

const getVisitedPlaces = (patient: Patient) => {
  const places = _(
    patient.timeline.filter((entry) => entry._location !== undefined)
  )
    .map((entry) => {
      return `${entry._location}`;
    })
    .uniq()
    .orderBy()
    .value();
  // const uniqePlaces = _.uniq(places).filter((place) => place !== 'undefined');
  // return _.orderBy(uniqePlaces).toString();
  return places.toString();
};

const groupedTimeline = (patient: Patient) => {
  const tl = _(patient.timeline).groupBy("entryDate").value();
  // console.log(tl);
  const keys = Object.keys(tl);
  // console.log(keys);
  const sortedKey = keys.sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  console.log(sortedKey);
  return sortedKey.map((key) => {
    return tl[key];
  });
};

export default TimelineInformation;
