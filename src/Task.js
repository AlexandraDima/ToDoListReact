import React, {Component} from 'react';

class Task extends Component {

    render() {

            return (
                <ol className="list-group" id="itemList">
                    <li>{this.text}</li>
                </ol>
            )
        }
    }

export default Task;
