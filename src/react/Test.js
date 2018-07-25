import React from "react";
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
  {
    value: 'Computer Science',
  },
  {
    value: 'Creative Technologies'
  },
  {
    value: 'Basket Weaving'
  },
  {
    value: 'Mathmatics'
  }
]
class Test extends React.Component
{
  render() {
    return (
      <div>
      <Dropdown options={options} onChange={this._onSelect} placeholder="Choose Your Checksheet" />
      </div>
    );
  }
}

export default Test
