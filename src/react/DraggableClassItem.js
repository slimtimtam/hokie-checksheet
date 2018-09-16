import React from "react";
import { DragSource } from "../../node_modules/react-dnd";
import "../App.css"

const draggableClassItemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    return props.handleDrop(props.item.id);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class DraggableClassItem extends React.Component
{
  render() {
    const { isDragging, connectDragSource, item } = this.props
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="draggable-class-item-source" style={{ opacity }}>
        <span>{item.name}</span>
      </div>
    );
  }
}

export default DragSource('draggableClassItem', draggableClassItemSource, collect)(DraggableClassItem)
