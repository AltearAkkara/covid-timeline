// tabtitle.tsx

import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Entry, LocationType } from "../models/Entry";
import { Patient } from "../models/Patient";
import EntryForm from "./EntryForm";
import TimelineInformation from "./TimelineInformation";

type Props = {
  patientData: Patient;
  onAddPatientTimeline: () => void;
  timeline: Entry[];
  trigger: number;
};

const TimelinePanel: React.FC<Props> = ({
  patientData,
  onAddPatientTimeline,
  timeline,
  trigger
}) => {
  useEffect(() => {
    console.log(patientData);
    console.log(timeline);
    console.log(trigger);
  });
  // const [timeline, setTimeline] = useState<Entry[]>(patientData.timeline);

  // const addEntry = () => {
  //   // setTimeline((prevTimeline) => {
  //   //   console.log(patientData);
  //   //   console.log(prevTimeline);
  //   //   const newEntry = new Entry(new Date(), new Date(), "555", LocationType.HOME, "'");
  //   //   patientData.addEntry(newEntry);
  //   //   return prevTimeline.concat(newEntry);
  //   // });
  //   console.log(patientData);
  //   patientData.addEntry(new Entry(new Date(), new Date(), "555", LocationType.HOME, "'"));
  //   setTimeline(patientData.timeline);
  // };

  // const removeEntry = (entryId: string) => {
  //   setTimeline((prevTimeline) => {
  //     return prevTimeline.filter((entry) => entry._id !== entryId);
  //   });
  // };

  return (
    <Row
      style={{
        paddingTop: "30px",
      }}
    >
      <Col md={7}>
        <TimelineInformation
          patientData={patientData}
          timeline={timeline}
        ></TimelineInformation>
      </Col>
      <Col md={5}>
        <EntryForm onAddEntryHandler={onAddPatientTimeline}></EntryForm>
      </Col>
    </Row>
  );
};

export default TimelinePanel;
