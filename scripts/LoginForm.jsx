import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {

  render() {
    return (
      <div>
        <div>
          <span>Tên tài khoản  <span style={{color: 'red'}}>(required)</span></span>
          <input name="username" />
        </div>
        <div>
          <span>Password <span style={{color: 'red'}}>(required)</span></span>
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
