import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'fix me'
    }
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((i) => <Todo task={i} />)}
      </ul>
    );
  }
};

export default TodoList;
