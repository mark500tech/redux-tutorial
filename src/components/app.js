import React from 'react';
import AddPanel from "./add-panel.js";
import TodosList from "./todos-list.js"
import {addTodo, toggleTodo, filterAction} from '../actions/todos'
import { connect } from 'react-redux';
import Filter from "./filter";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <AddPanel addTodo={this.props.addTodo}/>
        <TodosList values={this.props.todos} toggleTodo={this.props.toggleTodo}/>
        <Filter filterAction={this.props.filterAction}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps, {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  filterAction: filterAction
})(App);

