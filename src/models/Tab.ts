import { Patient } from "./Patient";

export default class Tab {
  id: string;

  constructor(public patient: Patient, public index: number) {
    this.id = new Date().toISOString();
  }
}
