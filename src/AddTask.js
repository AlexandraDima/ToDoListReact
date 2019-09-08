import React, {Component} from 'react';


export default class AddTask extends Component {
    constructor(props) {
    super(props);
    // This is out initial state (which is just an empty property named 'input')
    this.state = {input: ""};
    this.onChange = this.onChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }

onChange(event) {
    // We can only change state using this.setState() and replace the current state with something new.
    this.setState({
        input: event.target.value // We replace input with the current value of target.
        // evet.target.value is the contents of the HTML input tag.
    });
}

    handleInput(event) {
        event.preventDefault();
        this.props.addTask(this.state.input);
    }
    render() {
        return (
            <form>
                <label htmlFor="itemText">New Item</label>
                <input type="text" className="form-control" id="itemText" placeholder="Fetch kids from school" onChange={this.onChange} />

                <small>Write something for your TODO list</small>
                <button onClick={this.handleInput} type="submit" id="submitItemBtn">Add Task</button>
            </form>
        );
    }
}

