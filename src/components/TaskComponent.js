import React, {Component} from 'react';

class TaskComponent extends Component {
  constructor(props) {
    super(props)

    this.btnDoneClicked = this.btnDoneClicked.bind(this)
    this.renderDoneButton = this.renderDoneButton.bind(this)
    this.btnDeleteClicked = this.btnDeleteClicked.bind(this)
  }

  /**
   * Takes the onDelete method as a prop and gives it task.id and calls it,
   * so you can give it to the Delete button without continuously calling it.
   */
  btnDeleteClicked (){
        this.props.onDelete(this.props.task.id)
    }

  /**
   * Takes the onDone method as a prop and gives it task.id calls it,
   * so you can give it to the Done button without continuously calling it.
   */
  btnDoneClicked() {
    this.props.onDone(this.props.task.id)
  }

  /**
   * Checks the is_done property, if it was false, returns the button,
   * it it was true, doesn't show the button.
   *
   * @returns {*}
   */
  renderDoneButton() {
    if (!this.props.task.is_done) {
      return <button onClick={this.btnDoneClicked}>Done</button>
    } else {
      return null;
    }
  }

  render() {
    return (
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
