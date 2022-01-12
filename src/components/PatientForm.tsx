import React, { useRef } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
type Props = {
  isOpen: boolean;
  onHideHandler: () => void;
  onSubmitHandler: (gender: string, age: number, occupation: string) => void;
};

const PatientForm: React.FC<Props> = ({
  isOpen,
  onHideHandler,
  onSubmitHandler,
}) => {
  const genderRefInput = useRef<HTMLSelectElement>(null);
  const ageRefInput = useRef<HTMLInputElement>(null);
  const occupationRefInput = useRef<HTMLInputElement>(null);

  return (
    <Modal
      show={isOpen}
      onHide={onHideHandler}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header
        style={{
          color: "#fff",
          background: "#012d5e",
          padding: "10px",
        }}
        closeButton
      >
        <Modal.Title>Add patient</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          color: "#fff",
          background: "#012d5e",
          padding: "10px",
        }}
      >
        <Row>
          <Col md={4}>
            <Form.Label style={{ color: "fff" }}>Gender</Form.Label>
            <Form.Select
              aria-label="Default select example"
              ref={genderRefInput}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Label style={{ color: "#fff" }}>Age</Form.Label>
            <Form.Control type="text" placeholder="Age" ref={ageRefInput} />
          </Col>
          <Col md={4}>
            <Form.Label style={{ color: "#fff" }}>Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Occupation"
              ref={occupationRefInput}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          color: "#fff",
          background: "#012d5e",
          padding: "10px",
        }}
      >
        <Button
          style={{
            color: "#fff",
            background: "#dc3545",
            padding: "10px",
          }}
          onClick={onHideHandler}
        >
          Cancel
        </Button>
        <Button
          style={{
            color: "#000",
            background: "#ffc107",
            padding: "10px",
          }}
          onClick={() =>
            onSubmitHandler(
              genderRefInput.current!.value,
              +ageRefInput.current!.value,
              occupationRefInput.current!.value
            )
          }
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PatientForm;
