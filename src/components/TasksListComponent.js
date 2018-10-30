import React, {Component} from 'react';

class TasksListComponent extends Component {
    render(){
        return(
            this.props.tasks.map(function(x) { return (<div key={x.id}>{x.task}</div>) })

        )
    }
}

export default TasksListComponent;
