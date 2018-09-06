import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

class HelloBtn extends React.Component {

  render() {
    return (
      <div>
        <LoginForm />
    	</div>
    );
  }
}

const domContainer = document.querySelector('#root_element_for_react');
ReactDOM.render(<HelloBtn />, domContainer);