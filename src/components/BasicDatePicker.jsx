/* eslint-disable react/prop-types */
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment/moment";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function ResponsiveDateTimePickers(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer
        components={["DateTimePicker", "MobileDateTimePicker", "DesktopDateTimePicker", "StaticDateTimePicker"]}
      >
        <DemoItem label={props.label}>
          <DateTimePicker defaultValue={moment("2022-04-17T15:30")} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
