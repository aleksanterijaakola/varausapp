import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";
// import turkuamklogo from "../img/turku_amk.png";
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const history = useHistory();
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmite(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      //setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Email does not exist");
    }
    //setLoading(false);
  }

  return (
    <React.Fragment>
      <main>
        <header className="thefirmaimg">
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <img src={thefirmalogo} alt="thefirmalogo" height="70px" />
          <p class="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </p>
        </header>
        <article style={{ paddingTop: 0, paddingBottom: 0 }}>
          <p className="HeadingForgotPassword">Forgot Password?</p>

          <Formik
            handleSubmit
            initialValues={{ email: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Required"),
            })}
          >
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isSubmitting,
            }) => (
              <form className="ForgotPasswordForm" onSubmit={handleSubmite}>
                
                <input
                  name="email"
                  type="email"
                  className="InputboxEmail"
                  placeholder="E-MAIL"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={emailRef}
                  required
                  
                />
                {errors.email && touched.email && (
                  <label className="ForgotPassworderrors">{errors.email}</label>
                )}

                <div className="buttondivison" style={{ display: "flex", marginTop: '30px' }}>
                  <input
                    className="LoginRegisterForgotButton"
                    type="submit"
                    value="SEND"
                    disabled={isSubmitting}
                    style={{ marginRight: "2px" }}
                  />
                  <button
                    className="LoginRegisterForgotButton"
                    type="button"
                    value="Login"
                    onClick={() => history.push("/login")}
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </article>

        <footer>
          <img src="" alt="" class="mt-5 mb-4" height="70px" />
        </footer>
      </main>
    </React.Fragment>
  );
};

export default ForgotPassword;
