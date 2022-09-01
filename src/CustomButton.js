import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange() {}
  render() {
    return (
      <button className="example-custom-input" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<CustomButton />, rootElement);
