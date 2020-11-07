import React, { Component } from 'react'
import '../App.css'
import ReactFormInputValidation from 'react-form-input-validation'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: {
        email: '',
        password: '',
      },
      errors: {}
    }
    this.form = new ReactFormInputValidation(this, { locale: 'en' })
    this.form.useRules({
      password: 'required|min:5',
      email: 'required|email',
    })

    this.form.onformsubmit = (fields) => {
      console.log(this.state)
      this.props.history.push('/dashboard')

    }
  }

  render () {

    return (<React.Fragment>
      <h1>Registration</h1>
      <form onSubmit={this.form.handleSubmit}>
            <p>
              <label>

                <input type="email"
                       value={this.state.fields.email}
                       onBlur={this.form.handleBlurEvent}
                       onChange={this.form.handleChangeEvent}
                       name="email"
                       placeholder="Email"/>

              </label>
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ''}
              </label>
            </p>

            <p>
              <label>
                <input type="password"
                       value={this.state.fields.password}
                       onChange={this.form.handleChangeEvent}
                       onBlur={this.form.handleBlurEvent}
                       name="password"
                       placeholder={'password'}/>
              </label>
              <label className="error">
                {this.state.errors.password ? this.state.errors.password : ''}
              </label>
            </p>

            <p>
              <button type="Submit">Sign Up!</button>
            </p>
      </form>
    </React.Fragment>)
  }
}

export default Register