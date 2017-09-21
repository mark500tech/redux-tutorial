import React from 'react';
import Todo from './todo.js';

export default class TodosList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleTodoClick = (index) => {
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.props.values.map((todo, index) => {
                return (<Todo key={index} todo={todo} onClick={() => this.handleTodoClick(index)}/>)
              }
            )
          }
        </ul>
      </div>
    );
  }
}

