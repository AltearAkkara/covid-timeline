import React, { useState } from "react";
import Tabs from "./components/Tabs";
import "./App.css";
import Tab from "./models/Tab";
import { Patient } from "./models/Patient";
import { validate } from "class-validator";
import { Container, Row } from "react-bootstrap";
import PatientForm from "./components/PatientForm";
import { Entry, LocationType } from "./models/Entry";

function App() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [tabs, setTabs] = useState<Tab[]>([
    new Tab(new Patient("s", 1, "s"), 1),
    new Tab(new Patient("a", 15, "a"), 2),
  ]);
  const [isOpen, setIsOpen] = useState(false);
  // const [timeline, setTimeline] = useState<Entry[]>(
  //   // tabs[selectedTab - 1].patient.timeline
  //   []
  // );

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const addPatient = (gender: string, age: number, occupation: string) => {
    const patient = new Patient(gender, age, occupation);
    validate(patient).then((errors) => {
      if (errors.length > 0) {
        alert("Invalid input, please try again.");
        console.log(errors);
      } else {
        const newTab = new Tab(patient, tabs.length + 1);
        setTabs((prevTabs) => {
          setSelectedTab(tabs.length + 1);
          return prevTabs.concat(newTab);
        });
        hideModal();
      }
    });
  };

  // const addPatientTimeline = () => {
  //   // tabs[selectedTab - 1].patient.addEntry(newEntry);
  //   setTimeline((prevTimeline) => {
  //     // console.log(patientData);
  //     // console.log(prevTimeline);
  //     const newEntry = new Entry(
  //       new Date(),
  //       new Date(),
  //       "555",
  //       LocationType.HOME,
  //       "'"
  //     );
  //     // patientData.addEntry(newEntry);
  //     return prevTimeline.concat(newEntry);
  //   });
  //   const newEntry = new Entry(
  //     new Date(),
  //     new Date(),
  //     "555",
  //     LocationType.HOME,
  //     "'"
  //   );
  //   tabs[selectedTab - 1].patient.addEntry(newEntry);
  // };

  // const addTabHandler = () => {
  //   showModal();
  // };

  const removeTab = (tabIndex: number) => {
    setTabs((prevTabs) => {
      setSelectedTab(tabs.length - 1);
      const removedTab = prevTabs.filter((tab) => tab.index !== tabIndex);
      const result: Tab[] = removedTab.map((tab) => {
        if (tab.index > tabIndex) {
          return {
            patient: tab.patient,
            id: tab.id,
            index: tab.index - 1,
          };
        }
        return tab;
      });
      return result;
    });
  };

  return (
    <div className="App">
      <PatientForm
        isOpen={isOpen}
        onHideHandler={hideModal}
        onSubmitHandler={addPatient}
      ></PatientForm>
      <Container>
        <Row>
          <h1>COVID Timeline Generator</h1>
        </Row>
        <Row>
          <Tabs
            selectedTab={selectedTab}
            onClick={setSelectedTab}
            tabs={tabs}
            onAddTabHandler={showModal}
            onRemoveTabHandler={removeTab}
            // onAddPatientTimeline={addPatientTimeline}
            // timeline={timeline}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
