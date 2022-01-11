// tabtitle.tsx

import React, { useCallback } from "react";
import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Patient } from "../models/Patient";
type Props = {
  onAddEntryHandler: () => void;
};

const EntryForm: React.FC<Props> = ({onAddEntryHandler}) => {
  return (
    <Card
      style={{
        background: "#012d5e",
        borderColor: "#254870",
        borderWidth: "2px",
      }}
    >
      <Card.Body>
        <Container>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col md={8}>
              <Form.Label style={{ color: "#fff" }}>From</Form.Label>
              <Form.Control type="text" placeholder="Large text" />
            </Col>
            <Col md={4}>
              <Form.Label style={{ color: "#fff" }}>To</Form.Label>
              <Form.Control type="text" placeholder="Large text" />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col>
              <Form.Label style={{ color: "#fff" }}>Detail</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col md={5}>
              <Form.Label style={{ color: "#fff" }}>Location Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="0">INDOOR</option>
                <option value="1">OUTDOOR</option>
                <option value="2">HOME</option>
                <option value="3">TRAVELLING</option>
              </Form.Select>
            </Col>
            <Col md={7}>
              <Form.Label style={{ color: "#fff" }}>Location</Form.Label>
              <Form.Control type="text" placeholder="Large text" />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Button
              style={{
                color: "#000",
                background: "#ffc107",
                padding: "10px",
              }}
              onClick={() => onAddEntryHandler()}
            >
              + Add Entry
            </Button>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default EntryForm;
