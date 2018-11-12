import React, {Component} from 'react';
import { Button } from 'reactstrap';

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
        <Button className="button-style btn btn-primary btn-sm" color="success" onClick={this.btnAllClicked}>All</Button>
        <Button className="button-style btn btn-primary btn-sm" color="warning" onClick={this.btnPendingClicked}>Pending</Button>
        <Button className="button-style btn btn-primary btn-sm" color="danger" onClick={this.btnDoneClicked}>Done</Button>
      </div>
    )
  }
}

export default FilterComponent;
