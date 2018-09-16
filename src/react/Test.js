import React from "react";
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import "../App.css"
import SemesterSection from "./SemesterSection";

const options = [
  {
    value: 'Computer Science',
  },
  {
    value: 'Creative Technologies'
  },
  {
    value: 'Basket Weaving'
  }
]

class Test extends React.Component
{
  render() {
    return (
      <div>
        <Dropdown options={options} onChange={this._onSelect} placeholder="Choose Your Checksheet" />
        <SemesterSection/>
      </div>
    );
  }
}

export default Test
