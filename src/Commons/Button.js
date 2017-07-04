import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <div className={"btn-father " + this.props.className}>
        <a href="javascript:;" className={'btn ' + this.props.type} onClick={() => this.props.click && this.props.click()}>
          {this.props.title}
        </a>
      </div>
    );
  }
}

Button.prototype.defaultProps = function() {
  return {
    type: 'blue',
    className: ''
  }
}

export default Button;