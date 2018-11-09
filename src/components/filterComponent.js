import React, {Component} from 'react';

class FilterComponent extends Component {
  constructor(props) {
    super(props)
    this.btnDoneClicked = this.btnDoneClicked.bind(this)
    this.btnPendingClicked = this.btnPendingClicked.bind(this)
    this.btnAllClicked = this.btnAllClicked.bind(this)
  }

  /**
   * gives 'All" string as a value to filter
   * in Change filter methode of App.js
   */
  btnAllClicked() {
    this.props.onChangeFilter('All')
  }

  /**
   * gives 'Pending" string as a value to filter
   * in Change filter methode of App.js
   */
  btnPendingClicked() {
    this.props.onChangeFilter('Pending')
  }

  /**
   * gives 'Done" string as a value to filter
   * in Change filter methode of App.js
   */
  btnDoneClicked() {
    this.props.onChangeFilter('Done')
  }

  render() {
    return (
      <div>
        <button onClick={this.btnAllClicked}>All</button>
        <button onClick={this.btnPendingClicked}>Pending</button>
        <button onClick={this.btnDoneClicked}>Done</button>
      </div>
    )
  }
}

export default FilterComponent;
