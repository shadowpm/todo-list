import React, { Component } from 'react';

class CreateTaskComponent extends Component {
    render(){
        return(
            <div>
                <input id="user-task" />
                <button type="button">Add Task</button>
            </div>
        )
    }
}
 export default CreateTaskComponent;
