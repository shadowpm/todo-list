import React, {Component} from 'react';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCreate(this.state.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter task" id="user-task" value={this.state.value}
                           onChange={this.handleChange}/>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default CreateTaskComponent;
