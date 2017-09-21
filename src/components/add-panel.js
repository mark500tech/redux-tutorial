import React from 'react';

export default class AddPanel extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleAddClick = () => {
    if (this.refs.todoInput.value) {
      this.props.addTodo(this.refs.todoInput.value);
      this.refs.todoInput.value = '';
    }
  };

  render() {
    return (
      <div className='add-panel'>
        <input type="text" placeholder='Type your TODO...' ref='todoInput'/>
        <button onClick={this.handleAddClick}>Add</button>
      </div>
    );
  }
}

