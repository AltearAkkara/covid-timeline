// tabtitle.tsx

import React, { useCallback } from "react";
import { Container,Row, Col, Card, Form } from "react-bootstrap";
import { Patient } from "../models/Patient";

type Props = {
  patientData: Patient;
};

const BaseInormation: React.FC<Props> = ({ patientData }) => {
  return (
    <Row
      style={{
        paddingTop: "30px",
      }}
    >
      <Col>
        <Card
          style={{
            background: "#012d5e",
            padding: "10px",
            borderColor: "#254870",
            borderWidth: "2px",
          }}
        >
          <Card.Body>
            <Container>
              <Row>
                <Col md={4}>
                  <Form.Label style={{ color: "#fff" }}>Gender</Form.Label>
                  <Form.Select aria-label="Default select example" defaultValue={patientData.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Label style={{ color: "#fff" }}>Age</Form.Label>
                  <Form.Control type="text" placeholder="Age" defaultValue={patientData.age} />
                </Col>
                <Col md={4}>
                  <Form.Label style={{ color: "#fff" }}>Occupation</Form.Label>
                  <Form.Control type="text" placeholder="Occupation" defaultValue={patientData.occupation}/>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BaseInormation;
