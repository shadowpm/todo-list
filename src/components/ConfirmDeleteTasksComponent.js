import React, {Component} from 'react';
import _ from 'lodash'

class ConfirmDeleteTasksComponent extends Component {
  render() {
    if (_.isNil(this.props.task)) {
      return null
    } else {
      return (
        <div>
          <h4>Do you want to delete this task?</h4>
          <button onClick={this.props.onDelete}>Yes</button>
          <button onClick={this.props.onCancel}>No</button>
        </div>
      )
    }
  }
}


export default ConfirmDeleteTasksComponent;
