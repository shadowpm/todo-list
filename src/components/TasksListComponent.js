import React, {Component} from 'react';
import TaskComponent from './TaskComponent';

class TasksListComponent extends Component {
  render() {
    return (
      this.props.tasks.map(
        (task) => (<TaskComponent key={task.id}
                                  task={task}
                                  onDone={this.props.onDone}
                                  onDelete={this.props.onDelete}
                                  onEdit={this.props.onEdit}/>))
    )
  }
}

export default TasksListComponent;
