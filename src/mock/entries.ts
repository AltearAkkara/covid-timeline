import moment from "moment";
import { Entry, LocationType } from "../models/Entry";

export const mockEntries: Entry[] = [
  {
    _id: '1',
    _timeFrom: new Date("2020-11-08T05:06:07"),
    _timeTo: new Date("2020-01-08T07:06:07"),
    _detail:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    _locationType: LocationType.HOME,
    _location: "",
  },
  {
    _id: '2',
    _timeFrom: new Date("2020-11-08T01:06:07"),
    _timeTo: new Date("2020-11-08T03:06:07"),
    _detail:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    _locationType: LocationType.HOME,
    _location: "",
  },
  {
    _id: '3',
    _timeFrom: new Date("2020-08-01 09:30:26"),
    _timeTo: new Date("2020-08-01 10:30:26"),
    _detail:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    _locationType: LocationType.HOME,
    _location: "",
  },
];
