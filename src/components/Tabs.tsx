import React, { FC } from "react";
import { Entry } from "../models/Entry";
import { Patient } from "../models/Patient";
import Tab from "./Tab";
// import  from "../models/Tab"
import "./Tabs.css";
type TabsProps = {
  tabs: {
    patient: Patient;
    index: number;
    // Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  onAddTabHandler: () => void;
  onRemoveTabHandler: (tabIndex: number) => void;
  // onAddPatientTimeline: () => void;
  // timeline: Entry[];
};

const Tabs: FC<TabsProps> = ({
  className = "tabs-component",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal",
  onAddTabHandler,
  onRemoveTabHandler,
  // onAddPatientTimeline,
  // timeline
}) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  return (
    <div
      className={
        orientation === "vertical" ? className + " vertical" : className
      }
    >
      <div role="tablist" aria-orientation={orientation}>
        {tabs.map((tab) => (
          <button
            className={selectedTab === tab.index ? "active" : ""}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {/* {tab.label} */}
            {"Patient"}
            {tab.index}
          </button>
        ))}

        {!isMaximumPatients(tabs) && (
          <button onClick={() => onAddTabHandler()}>Add</button>
        )}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {Panel && (
          <Tab
            index={selectedTab}
            onRemovePatient={onRemoveTabHandler}
            // onAddPatientTimeline={onAddPatientTimeline}
            patientData={getSeclectedTabByIndex(tabs, selectedTab).patient}
            // timeline={timeline}
          />
        )}
      </div>
    </div>
  );
};

const isMaximumPatients = (patientList: any[]) => {
  return patientList.length >= 8;
};

const getSeclectedTabByIndex: any = (tabs: any[], index: number) => {
  return tabs.find((tab) => tab.index == index);
};

export default Tabs;
