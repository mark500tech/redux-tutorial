import React from 'react';
import AddPanel from "./add-panel.js";
import TodosList from "./todos-list.js"
import {addTodo, toggleTodo, filterAction} from '../actions/todos'
import { connect } from 'react-redux';
import Filter from "./filter";

function getFilteredValues(filterString, values) {
  switch (filterString) {
    case 'SHOW_ALL':
      return values;
    case 'SHOW_CHECKED':
      return values.filter((value) => value.checked);
    case 'SHOW_UNCHECKED':
      return values.filter((value) => !value.checked);
    default:
      return values;
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const values = getFilteredValues(this.props.filterBy, this.props.todos);
    return (
      <div>
        <AddPanel addTodo={this.props.addTodo}/>
        <TodosList values={values} toggleTodo={this.props.toggleTodo}/>
        <Filter getFilter={this.props.getFilter}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  filterBy: state.todos.filterBy
});

export default connect(mapStateToProps, {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  getFilter: filterAction
})(App);

