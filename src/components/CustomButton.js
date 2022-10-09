import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  shouldComponentUpdate() {
    return true;
  }

  changeCount() {
    this.setState({...this.state, count: this.state.count + 1})
  }

  render() {
    return <button onClick={() => this.changeCount()}>{this.props.title} {this.state.count}</button>;
  }
}

export default CustomButton;