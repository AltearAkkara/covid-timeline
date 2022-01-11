import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Min,
  Max
} from "class-validator";
import { mockEntries } from "../mock/entries";
import { Entry } from "./Entry";

export class Patient {
  @IsNotEmpty()
  private _gender: string;

  @IsNumber()
  @IsPositive()
  @Min(0)
  @Max(120)
  private _age: number;

  @IsNotEmpty()
  private _occupation: string;

  public _timeline: any[];

  constructor(gender: string, age: number, occupation: string) {
    this._gender = gender;
    this._age = age;
    this._occupation = occupation;
    this._timeline = [];
  }

  get gender() {
    return this._gender;
  }

  get age() {
    return this._age;
  }

  get occupation() {
    return this._occupation;
  }

  get timeline() {
    return this._timeline;
  }

  public addEntry(entry: Entry) {
    this._timeline = this._timeline.concat(entry);
    // this._timeline.push('');
    // this._timeline.concat(entry);
    // this._timeline.push(entry);
  }

  public removeEntry(entry: Entry) {
    this._timeline.filter(item => item._id !== entry._id);
  }

  public toString() {
      return `${this._gender} ${this._age} ${this.occupation}`
  }
}
