import React from "react";
import DraggableClassItem from "./DraggableClassItem.js";
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import "../App.css"

class DraggableItemContainer extends React.Component
{
  state = {
    items: [
      {id: 1, name: 'Placeholder1'},
      {id: 2, name: 'Placeholder2'},
      {id: 3, name: 'Placeholder3'},
    ]
  }

  deleteItem = (id) => {
    // TODO: Figure out how/if to implement
  }

  render() {
    return (
      <div className="semester-draggable-class-item-container"
           border="1px black">
        {this.state.items.map((item, index) =>(
          <DraggableClassItem key = {item.id} item={item} handleDrop={(id) =>
            this.deleteItem(id)} />
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DraggableItemContainer)
