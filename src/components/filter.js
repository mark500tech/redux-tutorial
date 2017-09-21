import React from 'react';

export default class Filter extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="filter">
        <div>
          <a href="#" onClick={() => this.props.getFilter('SHOW_ALL')}>Show all</a>
        </div>
        <div>
          <a href="#" onClick={() => this.props.getFilter('SHOW_CHECKED')}>Show checked</a>
        </div>
        <div>
          <a href="#" onClick={() => this.props.getFilter('SHOW_UNCHECKED')}>Show unchecked</a>
        </div>
      </div>
    );
  }
}

