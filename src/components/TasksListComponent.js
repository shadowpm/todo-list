import React, {Component} from 'react';
import TaskComponent from './TaskComponent';

class TasksListComponent extends Component {
    render(){
        return(
            this.props.tasks.map(function(x) { return (<div key={x.id}>{x.task}</div> + <TaskComponent/>) })

        )
    }
}

export default TasksListComponent;
