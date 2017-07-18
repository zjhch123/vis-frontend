import React from 'react';
import style from './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <div className={style.btn_father + " " + this.props.className}>
        <a className={style.btn + " " + style[this.props.type]} onClick={() => this.props.click && this.props.click()}>
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