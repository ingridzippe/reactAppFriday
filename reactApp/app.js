import React from 'react';
import ReactDOM from 'react-dom';



class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'fix me'
    }
  }
  render() {
    var dummyData = ['clean room', 'build web app', 'emails', 'buy pencils'];
    return (
      <ul>
        {dummyData.map((i) => <Todo task={i} />)}
      </ul>
    );
  }
};

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <li>
          <button className="btn btn-primary">X</button>
          {this.props.task}
        </li>
      </div>
    );
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <p></p>
    );
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
