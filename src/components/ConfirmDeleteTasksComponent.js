import React, {Component} from 'react';
import _ from 'lodash';
import { Button } from 'reactstrap';

class ConfirmDeleteTasksComponent extends Component {
  render() {
    if (_.isNil(this.props.task)) {
      return null
    } else {
      return (
        <div>
          <h6 className="edit-delete-style">Do you want to delete this: "{this.props.task.task}" task?</h6>
          <Button className="button-style btn-primary btn-sm" onClick={this.props.onDelete}>Yes</Button>
          <Button className="button-style btn-primary btn-sm" onClick={this.props.onCancel}>No</Button>
        </div>
      )
    }
  }
}

export default ConfirmDeleteTasksComponent;
