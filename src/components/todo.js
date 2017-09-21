import React from 'react';

export default class Todo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='todo'>
        <li onClick={this.props.onClick}
        style={{
          textDecoration: this.props.todo.checked ? 'line-through' : 'none',
          cursor: 'pointer'
        }}>
          {this.props.todo.text}
        </li>
      </div>
    );
  }
}

