import React from "react";
import { Row, Col } from "react-bootstrap";
import { Entry } from "../models/Entry";
import { Patient } from "../models/Patient";
import EntryForm from "./EntryForm";
import TimelineInformation from "./TimelineInformation";

type Props = {
  patientData: Patient;
  onAddPatientTimeline: (
    fromValue: any,
    toValue: any,
    detail: any,
    locationType: any,
    location: any
  ) => void;
  onRemovePatientTimeline: (entry: Entry) => void;
  timeline: Entry[];
};

const TimelinePanel: React.FC<Props> = ({
  patientData,
  onAddPatientTimeline,
  timeline,
  onRemovePatientTimeline
}) => {
  return (
    <Row
      style={{
        paddingTop: "30px",
      }}
    >
      <Col md={7}>
        <TimelineInformation
          patientData={patientData}
          onRemovePatientTimeline={onRemovePatientTimeline}
        ></TimelineInformation>
      </Col>
      <Col md={5}>
        <EntryForm onAddEntryHandler={onAddPatientTimeline} ></EntryForm>
      </Col>
    </Row>
  );
};

export default TimelinePanel;
