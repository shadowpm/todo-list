import React, {Component} from 'react';

class FilterComponent extends Component {
  constructor(props) {
    super(props)
    this.btnDoneClicked = this.btnDoneClicked.bind(this)
    this.btnPendingClicked = this.btnPendingClicked.bind(this)
    this.btnAllClicked = this.btnAllClicked.bind(this)
  }

  btnAllClicked() {
    this.props.onChangeFilter('All')
  }

  btnPendingClicked() {
    this.props.onChangeFilter('Pending')
  }

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
