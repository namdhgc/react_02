import React from 'react';
import ReactDOM from 'react-dom';
import { InputPhoneNumber } from 'components';

export default class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      extraPhoneNumbers: 0,
    };
  }

  handleShowLogin() {
    this.props.handleShowLogin(true);
  }

  addMorePhoneNumber() {
    this.setState({ extraPhoneNumbers: this.state.extraPhoneNumbers + 1 })
  }

  removePhoneNumber() {
    this.setState({ extraPhoneNumbers: this.state.extraPhoneNumbers - 1 })
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
        <div>
          <InputPhoneNumber
            extraPhoneNumbers={this.state.extraPhoneNumbers}
            addMorePhoneNumber={() => this.addMorePhoneNumber()}
            removePhoneNumber={() => this.removePhoneNumber()}
          />
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
