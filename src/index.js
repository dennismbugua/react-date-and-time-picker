import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-bootstrap-time-picker";

import "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      time: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  handleChange(selectedDateTime) {
    var currentTime = moment(new Date(), "DD/MM/YYYY");
    var selectedDate = moment(new Date(selectedDateTime._d), "DD/MM/YYYY");
    var duration = moment.duration(selectedDate.diff(currentTime));
    var durationInSec = this.convertSecond(duration._data);
    console.log("duration obj ", duration, " Seconds", durationInSec);
    this.setState({
      startDate: selectedDateTime
    });
  }
  convertSecond(durationData) {
    return (
      durationData.hours * 60 * 60 +
      durationData.minutes * 60 +
      durationData.seconds
    );
  }

  handleTime(selectedTime) {
    console.log("time selected ", selectedTime);
    this.setState({
      time: selectedTime
    });
  }

  render() {
    {
      /*<DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        minTime={moment()}
        maxTime={moment()
          .hours(23)
          .minutes(55)}
        timeFormat="HH:mm"
        timeIntervals={5}
        dateFormat="LLL"
        timeCaption="time"
      />*/
    }
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="LT"
          timeCaption="Time"
        />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={this.handleTime}
          value={this.state.time}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
