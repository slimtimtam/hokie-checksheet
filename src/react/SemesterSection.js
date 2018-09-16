import React from "react";
import DraggableItemContainer from "./DraggableItemContainer"
import "../App.css"

class SemesterSection extends React.Component
{
  render() {
    return (
      <div>
        <DraggableItemContainer id="1"/>
        <DraggableItemContainer id="2"/>
        <DraggableItemContainer id="3"/>
        <DraggableItemContainer id="4"/>
      </div>
    );
  }
}
export default SemesterSection
