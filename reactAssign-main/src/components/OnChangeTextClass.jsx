import { Component } from 'react';
import styles from './Cals.module.css';

class OnChangeTextFun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: ''
    };
  }

  handleChange = (e) => {
    this.setState({ change: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ change: '' });
  }

  render() {
    return (
      <div>
        <h1>Stateful Component</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={styles.ip}
            onChange={this.handleChange}
            value={this.state.change}
          />
          <br />
          <button type="submit">Submit</button>
          <br /><br />
        </form>
        <div>
          <span>Current Value:</span>
          <span>{this.state.change}</span>
        </div><br /><br />
      </div>
    );
  }
}

export default OnChangeTextFun;
