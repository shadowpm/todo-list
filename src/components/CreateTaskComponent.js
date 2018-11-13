import React, {Component} from 'react';
import {Button} from 'reactstrap';

class CreateTaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.onCreate(this.state.value)
    this.setState({
      value: ''
    })
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline form-style">
        <input className="form-control mb-2 mr-2" placeholder="Enter task"
               id="user-task"
               value={this.state.value}
               onChange={this.handleChange}/>
        <Button className="btn btn-primary btn-sm mb-2">Add Task</Button>
      </form>
    )
  }
}

export default CreateTaskComponent;
