import React from 'react';
import ReactDOM from 'react-dom';
import { LoginForm, RegisterForm } from 'components';

class HelloBtn extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      login: true,
      register: false,
    };
  }

  handleShowRegister() {
    this.setState({
      login: false,
      register: true,
    })
  }
  handleShowLogin() {
    this.setState({
      login: true,
      register: false,
    })
  }

  render() {
    let mainContent = null;
    if (this.state.login) {
      mainContent = <LoginForm
        handleShowRegister={() => this.handleShowRegister()}
      />
    } else if (this.state.register) {
      mainContent = <RegisterForm
        handleShowLogin={() => this.handleShowLogin()}
      />
    }
    return (
      <div>
        {mainContent}
    	</div>
    );
  }
}

const domContainer = document.querySelector('#root_element_for_react');
ReactDOM.render(<HelloBtn />, domContainer);