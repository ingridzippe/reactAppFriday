import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine'; 

var dummyData = [
  { taskText: 'clean room', completed: false },
  { taskText: 'emails', completed: false },
  { taskText: 'build web app', completed: true },
  { taskText: 'buy pencils', completed: false }
];

// CONTAINER APP
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }
  componentDidMount() {
    this.setState({todos: dummyData})
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
