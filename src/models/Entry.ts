import {
    IsNotEmpty,
    IsNumber,
    IsPositive
  } from "class-validator";
  import moment from "moment";

export class Entry {
  _id: string;
  _timeFrom: Date;
  _timeTo: Date;
  _detail: string;
  _locationType: LocationType;
  _location?: string;
  constructor(
    timeForm: Date,
    timeTo: Date,
    detail: string,
    locationType: LocationType,
    location?: string
  ) {
    this._id = new Date().toISOString();
    this._timeFrom = timeForm;
    this._timeTo = timeTo;
    this._detail = detail;
    this._locationType = locationType;
    if(location) {
        this._location = location;
    }
  }

  get entryDate () {
    return moment(this._timeFrom).format("DD/MM/YYYY")
  }

  get entryFromTime () {
    return this._timeFrom.toLocaleTimeString('th-TH');
  }

  get entryToTime () {
    return this._timeTo.toLocaleTimeString('th-TH');
  }

  get timestamp() {
    return this._timeFrom.getTime();
  }
}

export enum LocationType {
  INDOOR,
  OUTDOOR,
  HOME,
  TRAVELLING,
}
