import React, { useRef } from 'react'
import ReactFormInputValidation from 'react-form-input-validation'
import '../App.css'
import thefirmalogo from '../img/thefirma_white.png'
import turkuamklogo from '../img/turku_amk.png'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  const error = useRef()
  const email = useRef()
  const password = useRef()

  async function handleSubmit (e) {
    e.preventDefault()
    console.log(e.email)
    console.log(email.current.value)
    history.push('/dashboard')
  }

  return (
    <React.Fragment>
      <article class="text-center">
        <form class="form-signin" onSubmit={handleSubmit}>
          <img src={thefirmalogo} alt="thefirmalogo" className="mb-1" height="70px"/>
          <h1 class="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </h1>
          <h2 class="h5 mb-3 font-weight-normal text-white text-left">
            Register
          </h2>
          <label for="inputMail" class="sr-only">
            Email Address
          </label>
          <input
            type="email"
            ref={email}
            //onBlur={this.form.handleBlurEvent}
            //onChange={this.form.handleChangeEvent}
            name="email"
            placeholder="E-MAIL"
            class="form-control"
          />

          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            ref={password}
            //onChange={this.form.handleChangeEvent}
            //onBlur={this.form.handleBlurEvent}
            name="password"
            placeholder="PASSWORD"
            class="form-control"
          />

          <div class="d-flex justify-content-around mt-3 mb-4">
            <button
              onClick={() => history.push('/login')}
              class="btn btn-primary text-white"
            >
              LOGIN
            </button>
            <button type="Submit" class="btn btn-primary text-white">
              SIGN UP
            </button>
          </div>
          <img src={turkuamklogo} alt="turkuamklogo" class="mt-5 mb-4" height="70px"/>
        </form>
      </article>
    </React.Fragment>
  )
}

export default Register
