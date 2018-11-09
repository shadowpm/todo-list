import React, {Component} from 'react';
import './App.css';
import CreateTaskComponent from './components/CreateTaskComponent';
import TasksListComponent from './components/TasksListComponent';
import FilterComponent from './components/filterComponent';
import ConfirmDeleteTasksComponent from "./components/ConfirmDeleteTasksComponent";

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
    this.getDeleteCandidateTask = this.getDeleteCandidateTask.bind(this)
    this.cancelDelete = this.cancelDelete.bind(this)
    this.setDeleteCandidateId = this.setDeleteCandidateId.bind(this)
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
   * filters the array of that one task(knows which task
   * using deleteCandidateTaskId) and puts it in a new array.
   *
   * @param taskId
   */
  delete() {
    this.setState({
      tasks: this.state.tasks.filter((task) => this.state.deleteCandidateTaskId !== task.id),
      deleteCandidateTaskId: null
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

  /**
   *We send it as a prop to TaskComponent, so it will go there
   * and set the deleteCandidateId to task.id value
   * (bc we only have it there from sending create method
   * to that component.
   *
   * @param taskId
   */
  setDeleteCandidateId (taskId){
    this.setState({deleteCandidateTaskId: taskId})
  }

  /**
   * uses deleteCandidate task id that now we have, to
   * find the task that delete button was clicked on it.
   * @returns {*}
   */
  getDeleteCandidateTask() {
    return this.state.tasks.find((task) => this.state.deleteCandidateTaskId === task.id)
  }

  /**
   * nulls the value of deleteCandidateTaskId.
   */
  cancelDelete() {this.setState({ deleteCandidateTaskId: null })}

  render() {
    return (
      <div className="App">
        <h2>To do List</h2>
        <FilterComponent onChangeFilter={this.changeFilter} currentFilter={this.state.filter}/>
        <CreateTaskComponent onCreate={this.create}/>
        <TasksListComponent tasks={this.getTasksByFilter()}
                            onDone={this.done}
                            onDelete={this.setDeleteCandidateId}/>
        <ConfirmDeleteTasksComponent task={this.getDeleteCandidateTask()}
                                     onDelete={this.delete}
                                     onCancel={this.cancelDelete}/>
      </div>
    );
  }
}

export default App;
