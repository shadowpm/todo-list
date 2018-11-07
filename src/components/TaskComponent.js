import React, {Component} from 'react';

class TaskComponent extends Component {
    constructor(props){
        super(props)
        this.btnDeleteClicked = this.btnDeleteClicked.bind(this)
        this.btnDoneClicked = this.btnDoneClicked.bind(this)
        this.renderDoneButton = this.renderDoneButton.bind(this)
    }
    btnDeleteClicked (){
        this.props.onDelete(this.props.task.id)
    }
    btnDoneClicked () {
        this.props.onDone(this.props.task.id)
    }

    renderDoneButton () {
        if (!this.props.task.is_done) {
            return <button onClick={this.btnDoneClicked}>Done</button>
        } else {
            return null;
        }
    }

    render() {
        return(
            <div>
                {this.props.task.task}
                <button onClick={this.btnDeleteClicked}>Delete</button>
                <button>Edit</button>
                {this.renderDoneButton()}
            </div>
        )
    }
}

export default TaskComponent;
