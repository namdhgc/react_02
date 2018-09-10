import React from 'react';
import ReactDOM from 'react-dom';

export default class InputPhoneNumber extends React.Component {

  constructor(props) {
    super(props);
  }

  makeExtraPhoneNumbers() {
    if (this.props.extraPhoneNumbers) {
      let extra = [];
      for (let i = 1; i <= this.props.extraPhoneNumbers; ++i) {
        extra.push(
          <div>
            <span>Số điện thoại thứ {i} <span style={{color: 'red'}}>(required)</span></span>
            <input name={`phone[${i}]`} />
            <button onClick={() => this.removePhoneNumber()}>
              x
            </button>
          </div>
        );
      }

      return extra;
    }
  }

  addMorePhoneNumber() {
    this.props.addMorePhoneNumber();
  }

  removePhoneNumber() {
    this.props.removePhoneNumber();
  }

  render() {
    return (
      <div>
        <span>Số điện thoại <span style={{color: 'red'}}>(required)</span></span>
        <input name="phone[0]" />
        <button onClick={() => this.addMorePhoneNumber()}>
          Add phone number
        </button>
        {this.makeExtraPhoneNumbers()}
      </div>
    );
  }
}
