import React, {Component} from 'react';
import './App.css';
import CreateTaskComponent from './components/CreateTaskComponent';
import TasksListComponent from './components/TasksListComponent';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            id: 0,
            filter: false,
            editCandidateTaskId: false,
            deleteCandidateTaskId: false
        }

        this.create = this.create.bind(this)
    }

    create(task) {
        const object = {
            task: task,
            id: this.state.id,
            is_done: false
        }

        this.setState({
            tasks: [...this.state.tasks, object],
            id: this.state.id + 1
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <h2>To do List</h2>
                <CreateTaskComponent onCreate={this.create}/>
                <TasksListComponent tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;
