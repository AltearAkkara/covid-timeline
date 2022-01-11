import React, { FC, useState } from "react";
import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Patient } from "../models/Patient";
import "./Tab.css";
// import { Chrono } from "react-chrono";
import BaseInormation from "./BaseInformation";
import TimelinePanel from "./TimelinePanel";
import { Entry, LocationType } from "../models/Entry";

const Tab: FC<{
  index: number;
  patientData: Patient;
  onRemovePatient: (patientIndex: number) => void;
  // onAddPatientTimeline:() => void;
  // timeline: Entry[];
}> = (prop) => {
  const [timelines, setTimeline] = useState<Entry[]>(prop.patientData.timeline);

  const addPatientTimeline = (
    fromValue: any,
    toValue: any,
    detail: any,
    locationType: any,
    location: any
  ) => {
    // console.log(typeof fromValue,typeof toValue, detail, locationType, location);
    const newEntry = new Entry(
      fromValue,
      toValue,
      detail,
      locationType,
      location
    );
    // setTimeline((prevTimeline) => {
    //   // console.log('pat', prop.patientData);
    //   // console.log('prev', prevTimeline);
    //   // console.log('time', timelines);
    //   // prop.patientData.addEntry(newEntry);
    //   prop.patientData._timeline = prop.patientData._timeline.concat(newEntry);
    //   console.log(prop.patientData._timeline);
    //   console.log(prop.patientData._timeline.length);
    //   const result = prop.patientData._timeline.concat(newEntry);
    //   // prop.patientData._timeline.push(newEntry);
    //   return result;
    // });

    // prop.patientData._timeline = prop.patientData._timeline.concat(newEntry)
    prop.patientData.addEntry(newEntry);
    // prop.patientData._timeline.push(newEntry);
    setTimeline(prop.patientData._timeline);
  };

  const removePatientTimeline = (entry: Entry) => {
    // setTimeline((prevTabs) => {
    //   const removedTab = prevTabs.filter((tab) => tab.index !== tabIndex);
    //   const result: Tab[] = removedTab.map((tab) => {
    //     if (tab.index > tabIndex) {
    //       return {
    //         patient: tab.patient,
    //         id: tab.id,
    //         index: tab.index - 1,
    //       };
    //     }
    //     return tab;
    //   });
    //   return result;
    // });
    console.log(entry);
    prop.patientData.removeEntry(entry);
    console.log(prop.patientData);
    // prop.patientData._timeline.push(newEntry);
    setTimeline(prop.patientData._timeline);
  }

  return (
    <div className="Tab">
      {/* <style type="text/css">
        {`
      .btn-remove {
      background-color: #dc3545;
  color: white;
  padding: 10px;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style> */}
      <div>
        <Container>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col md={6}>
              <h2>Patient Information {prop.index}</h2>
            </Col>
            <Col
              md={6}
              style={{
                textAlign: "right",
              }}
            >
              <Button
                style={{
                  color: "#fff",
                  background: "#dc3545",
                  padding: "10px",
                }}
                // variant="remove"
                onClick={() => {
                  prop.onRemovePatient(prop.index);
                }}
              >
                Remove patient
              </Button>
            </Col>
          </Row>
          <BaseInormation patientData={prop.patientData}></BaseInormation>

          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col>
              <h2>Timeline </h2>
            </Col>
          </Row>
          <TimelinePanel
            patientData={prop.patientData}
            timeline={prop.patientData._timeline}
            onAddPatientTimeline={addPatientTimeline}
            onRemovePatientTimeline={removePatientTimeline}
          ></TimelinePanel>
        </Container>
      </div>
    </div>
  );
};

export default Tab;
