import React, {Component} from 'react';
import './App.css';
import CreateTaskComponent from './components/CreateTaskComponent';
import TasksListComponent from './components/TasksListComponent';
import FilterComponent from './components/filterComponent';
// import ConfirmDeleteTasksComponent from './components/ConfirmDeleteTasksComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      id: 0,
      filter: 'All', // ['All', 'Pending', 'Done']
      editCandidateTaskId: null,
      deleteCandidateTaskId: null
    }
    this.create = this.create.bind(this)
    this.delete = this.delete.bind(this)
    this.done = this.done.bind(this)
    this.changeFilter = this.changeFilter.bind(this)
    this.getTasksByFilter = this.getTasksByFilter.bind(this)
  }

  /**
   * Creates an object for each task, containing the task description,
   * an id, and the task state.
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

  /**
   * Gets the taskId that its Delete button was clicked on,
   * filters the array of that one task and puts it in a new array.
   *
   * @param taskId
   */
  delete(taskId) {
    this.setState({
      tasks: this.state.tasks.filter((task) => taskId !== task.id)
    })
  }

  /**
   * changes the task status (is_done) to true,
   * if the done button was clicked, then puts the whole
   * updated array into a new array and returns it.
   *
   * @param taskId
   */
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

  /**
   * Changes the filter to the updated filter if you click on either
   * of the All, Done or Pending buttons in FilterComponent.
   *
   * @changeFilter newFilter
   */
  changeFilter(newFilter) {
    this.setState({
      filter: newFilter
    })
  }

  /**
   * Checks the task filter and then, according to the filter,
   * changes the tasks that are being sent to the taskListComponent.
   *
   * @returns {*}
   */
  getTasksByFilter() {
    switch (this.state.filter) {
      case 'Done':
        return this.state.tasks.filter((task) => task.is_done)
      case 'Pending':
        return this.state.tasks.filter((task) => !task.is_done)
      default:
        return this.state.tasks;
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>To do List</h2>
        <FilterComponent onChangeFilter={this.changeFilter} currentFilter={this.state.filter}/>
        <CreateTaskComponent onCreate={this.create}/>
        <TasksListComponent tasks={this.getTasksByFilter()}
                            onDone={this.done}
                            onDelete={this.delete}/>
      </div>
    );
  }
}

export default App;
