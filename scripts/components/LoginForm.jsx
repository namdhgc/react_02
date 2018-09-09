import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleShowRegister() {
    this.props.handleShowRegister(true);
  }

  render() {
    return (
      <div>
        <div>
          Form đăng nhập
        </div>
        <button className="tablink">Login</button>
        <button className="tablink" onClick={() => this.handleShowRegister()}>Register</button>
        <div>
          <span>Tên tài khoản  <span style={{color: 'red'}}>(required)</span></span>
          <input name="username" />
        </div>
        <div>
          <span>Mật khẩu <span style={{color: 'red'}}>(required)</span></span>
          <input name="password" />
        </div>
        <div>
          <button onClick={() => alert("Bạn chưa nhập thông tin vào các trường required")}>
            Submit
          </button>
        </div>
    	</div>
    );
  }
}
