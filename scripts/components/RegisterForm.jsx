import React from 'react';
import ReactDOM from 'react-dom';
import { InputPhoneNumber } from 'components';

export default class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleShowLogin() {
    this.props.handleShowLogin(true);
  }

  render() {
    return (
      <div>
        <div>
          Form đăng ký
        </div>
        <button className="tablink" onClick={() => this.handleShowLogin()}>Login</button>
        <button className="tablink">Register</button>
        <div>
          <span>Tên tài khoản  <span style={{color: 'red'}}>(required)</span></span>
          <input name="username" />
        </div>
        <div>
          <span>Mật khẩu <span style={{color: 'red'}}>(required)</span></span>
          <input name="password" />
        </div>
        <InputPhoneNumber />
        <div>
          <button onClick={() => alert("Bạn chưa nhập thông tin vào các trường required")}>
            Submit
          </button>
        </div>
    	</div>
    );
  }
}
