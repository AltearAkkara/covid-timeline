import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  Validate
} from "class-validator";
import moment from "moment";

export enum LocationType {
  INDOOR,
  OUTDOOR,
  HOME,
  TRAVELLING,
}

@ValidatorConstraint({ name: "requiredLocation", async: false })
class RequiredLocation implements ValidatorConstraintInterface {
  validate(_text: string, validationArguments: ValidationArguments) {
    const entry: any = validationArguments.object!;
    const isRequiredLocation =
    entry.locationType === LocationType.INDOOR ||
    entry.locationType === LocationType.OUTDOOR;
    return isRequiredLocation ? entry.location : true;
  }

  defaultMessage(_arg: ValidationArguments) {
    return "Location is required!";
  }
}

export class Entry {
  private _id: string;

  @IsDate()
  private _timeFrom: Date;

  @IsDate()
  private _timeTo: Date;

  @IsNotEmpty()
  private _detail: string;

  @IsNumber()
  private _locationType: LocationType;

  @Validate(RequiredLocation)
  private _location?: string;

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
    if (location) {
      this._location = location;
    }
  }

  get id() {
    return this._id;
  }

  get timeFrom() {
    return this._timeFrom;
  }

  get timeTo() {
    return this._timeTo;
  }

  get detail() {
    return this._detail;
  }

  get locationType() {
    return this._locationType;
  }

  get location() {
    return this._location;
  }

  get entryDate() {
    return moment(this._timeFrom).format("DD/MM/YYYY");
  }

  get entryFromTime() {
    return moment(this._timeFrom).format("hh:mm A");
  }

  get entryToTime() {
    return moment(this._timeTo).format("hh:mm A");
  }

  get timestamp() {
    return this._timeFrom.getTime();
  }

  get locationDetail() {
    return (
      locationTypeText[this._locationType] +
      (this._location ? `  ${this._location}` : "")
    );
  }
}

export const locationTypeText = ["Indoor", "Outdoor", "Home", "Travelling"];
