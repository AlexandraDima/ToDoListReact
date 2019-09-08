import React, {Component} from 'react';
import List from './List';
import AddTask from './AddTask';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
        this.addTask = this.addTask.bind(this);
    }


    addTask(text) {
        let newTask = {
            text: text,
            done: false
        };
    }

  render(){
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <List todoList={this.state.todoList}  />
          <AddTask addTask={this.addTask} />
        </div>
    );
  }
}

export default App;
