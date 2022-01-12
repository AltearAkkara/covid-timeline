import React, { useState, useRef } from "react";
import { Container, Button, Row, Col, Card, Form } from "react-bootstrap";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker, TimePicker } from "@mui/lab";
import { TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    info: {
      main: green[500],
    },
  },
});

type Props = {
  onAddEntryHandler: (
    fromValue: any,
    toValue: any,
    detail: any,
    locationType: any,
    location: any
  ) => void;
};

const EntryForm: React.FC<Props> = ({ onAddEntryHandler }) => {
  const [fromValue, setFromValue] = useState(new Date());
  const [toValue, setToValue] = useState(new Date());
  const locationTypeRefInput = useRef<HTMLSelectElement>(null);
  const locationRefInput = useRef<HTMLInputElement>(null);
  const detailRefInput = useRef<HTMLTextAreaElement>(null);

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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  value={fromValue}
                  onChange={(newValue) => {
                    setFromValue(newValue!);
                  }}
                />
              </LocalizationProvider>
            </Col>
            <Col md={4}>
              <Form.Label style={{ color: "#fff" }}>To</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={theme}>
                  <TimePicker
                    value={toValue}
                    onChange={(newValue) => {
                      setToValue(newValue!);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </ThemeProvider>
              </LocalizationProvider>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col>
              <Form.Label style={{ color: "#fff" }}>Detail</Form.Label>
              <Form.Control as="textarea" rows={6} ref={detailRefInput} />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "30px",
            }}
          >
            <Col md={5}>
              <Form.Label style={{ color: "#fff" }}>Location Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                ref={locationTypeRefInput}
              >
                <option value="0">Indoor</option>
                <option value="1">Outdoor</option>
                <option value="2">Home</option>
                <option value="3">Travelling</option>
              </Form.Select>
            </Col>
            <Col md={7}>
              <Form.Label style={{ color: "#fff" }}>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Large text"
                ref={locationRefInput}
              />
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
              onClick={() =>
                onAddEntryHandler(
                  fromValue,
                  toValue,
                  detailRefInput.current!.value,
                  +(locationTypeRefInput.current!.value),
                  locationRefInput.current!.value
                )
              }
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
