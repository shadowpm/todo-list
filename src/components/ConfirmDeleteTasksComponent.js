import React, {Component} from 'react';

class ConfirmDeleteTasksComponent extends Component {
    render(){
        return(
            this.setState({tasks: this.state.tasks.filter(function(x) {
                return x !== e.target.value })
            })
        )
    }
}

export default ConfirmDeleteTasksComponent;
