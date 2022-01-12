import { useState } from "react";
import Tabs from "./components/Tabs";
import "./App.css";
import Tab from "./models/Tab";
import { Patient } from "./models/Patient";
import { validate } from "class-validator";
import { Container, Row } from "react-bootstrap";
import PatientForm from "./components/PatientForm";

function App() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
