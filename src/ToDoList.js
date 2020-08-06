import React, { Component } from 'react';
import tasks from "./data"
import ToDoItem from './ToDoItem';

console.log(tasks)
class ToDoList extends Component {
    state = {}
    render() {
        return (
            <section>
                {
                    tasks.map(listEl =>
                        < ToDoItem
                            key={listEl.id}
                            completed={listEl.completed}
                            task={listEl.task}
                        />
                    )}
            </section>

        );
    }
}

export default ToDoList;