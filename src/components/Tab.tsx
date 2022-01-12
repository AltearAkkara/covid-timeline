import { FC, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Patient } from "../models/Patient";
import "./Tab.css";
import BaseInormation from "./BaseInformation";
import TimelinePanel from "./TimelinePanel";
import { Entry } from "../models/Entry";
import { validate } from "class-validator";

const Tab: FC<{
  index: number;
  patientData: Patient;
  onRemovePatient: (patientIndex: number) => void;
}> = (prop) => {
  const [timelines, setTimeline] = useState<Entry[]>(prop.patientData.timeline);

  const addPatientTimeline = (
    fromValue: any,
    toValue: any,
    detail: any,
    locationType: any,
    location: any
  ) => {
    const newEntry = new Entry(
      fromValue,
      toValue,
      detail,
      locationType,
      location
    );
    validate(newEntry).then((errors) => {
      if (errors.length > 0) {
        alert("Invalid input, please try again.");
        console.log(errors);
      } else {
        prop.patientData.addEntry(newEntry);
        setTimeline(prop.patientData._timeline);
      }
    });
  };

  const removePatientTimeline = (entry: Entry) => {
    prop.patientData.removeEntry(entry);
    setTimeline(prop.patientData._timeline);
  };

  return (
    <div className="Tab">
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
