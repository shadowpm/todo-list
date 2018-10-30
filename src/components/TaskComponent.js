import React, {Component} from 'react';

class TaskComponent extends Component {
    constructor(props){
        super(props)
        this.btnDeleteClicked = this.btnDeleteClicked.bind(this)
    }
    btnDeleteClicked (){
        this.props.onDelete(this.props.task.id)
    }
    render() {
        return(
            <div>
                {this.props.task.task}
                <button onClick={this.btnDeleteClicked}>Delete</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default TaskComponent;
