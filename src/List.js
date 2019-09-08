import React, {Component} from 'react';
import Task from './Task';


//Access todoList state inside the List component
//Writing a functional component because we don't need state inside the list,
//We declared already the state in the App.js
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };

    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                   <Task />
                </div>
            </div>
        )
    }
}

