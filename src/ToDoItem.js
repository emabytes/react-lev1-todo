import React, { Component } from 'react';

class ToDoItem extends Component {
    state = {}
    render() {
        return (
            <div id="item">
                <input type="checkbox" name="checkbox" id="checkbox" checked={this.props.completed} />
                <p>{this.props.task}</p>
            </div>
        );
    }
}

export default ToDoItem;