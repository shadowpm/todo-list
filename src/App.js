import React, {Component} from 'react';
import './App.css';
import CreateTaskComponent from './components/CreateTaskComponent';
import TasksListComponent from './components/TasksListComponent';
import FiltterComponent from './components/FiltterComponent';

// import ConfirmDeleteTasksComponent from './components/ConfirmDeleteTasksComponent';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            id: 0,
            filter: 'all', // ['all', 'pending', 'done']
            editCandidateTaskId: null,
            deleteCandidateTaskId: null
        }

        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
        this.done = this.done.bind(this)
        this.changeFilter = this.changeFilter.bind(this)
    }

    /**
     * This.....
     *
     * @param task
     */
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

    delete(taskId) {
        this.setState({
            tasks: this.state.tasks.filter((task) => {
                return taskId !== task.id

            })
        })
    }

    done(taskId) {
        this.setState({
            tasks: this.state.tasks.map((task) => {
                if (task.id === taskId) {
                    task.is_done = true;
                }
                return task;
            })
        })
    }

    getTasksByFilter() {
    }


    changeFilter(newFilter) {
        this.setState({
            filter: newFilter
        })
    }


    render() {
        console.log(this.state);
        return (
            <div className="App">
                <h2>To do List</h2>
                <FiltterComponent onChangeFilter={this.changeFilter} currentFilter={this.state.filter}/>
                <CreateTaskComponent onCreate={this.create}/>
                <TasksListComponent tasks={this.getTasksByFilter()}
                                    onDelete={this.delete} onDone={this.done}/>
            </div>
        );
    }
}

export default App;
