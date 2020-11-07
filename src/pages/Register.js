import React, {Component} from 'react';
import '../App.css';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',

    }
  }

  register = e => {
    console.log(this.state)
    e.preventDefault();
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){

    return(
      <div className="form_block">
        <div id="title">Registration</div>
        <div className="body">
          <form>
            <input type="text"
                   value={this.state.email}
                   onChange={this.handleChange}
                   name="email"
                   placeholder="Email"/>

            <input type="password"
                   value={this.state.password}
                   onChange={this.handleChange}
                   name="password"
                   placeholder={"Password"}/>

          </form>
          <button className="registerBtn" onClick={this.register}>Register</button>
        </div>
      </div>
    )
  }
}
export default Register;