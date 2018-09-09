import React from 'react';
import ReactDOM from 'react-dom';

export default class InputPhoneNumber extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>Số điện thoại <span style={{color: 'red'}}>(required)</span></span>
        <input name="phone" />
      </div>
    );
  }
}
