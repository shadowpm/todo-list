import React, {Component} from 'react';
import _ from 'lodash';
import { Button } from 'reactstrap';

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
          <h6 className="edit-delete-style">Edit task:</h6>
          <input placeholder="insert task"
                 onChange={this.handleChange}
                 value={this.state.value}/>
          <Button className="button-style btn-primary btn-sm" onClick={this.btnEditClicked}>Edit</Button>
          <Button className="button-style btn-primary btn-sm" onClick={this.props.onCancelEdit}>Cancel</Button>
        </div>
      )
    }
  }
}

export default EditTaskComponent;
