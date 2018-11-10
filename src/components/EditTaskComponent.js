import React, {Component} from 'react';
import _ from 'lodash';

class EditTaskComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {value: this.props.task};

    this.btnEditClicked = this.btnEditClicked.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  btnEditClicked() {
    this.props.onEdit(this.state.value)
  }

  render() {
    if (_.isNil(this.props.task)) {
      return null
    } else {
      return (
        <div>
          <h4>Edit task:</h4>
          <input placeholder="insert task"
                 onChange={this.handleChange}
                 value={this.state.value}/>
          <button onClick={this.btnEditClicked}>Edit</button>
          <button onClick={this.props.onCancelEdit}>Cancel</button>
        </div>
      )
    }
  }
}

export default EditTaskComponent;
