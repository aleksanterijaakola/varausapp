import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";
import { AuthProvider } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <main>
        <header className="thefirmaimg">
          <img src={thefirmalogo} alt="thefirmalogo" height="70px" />
          <p class="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </p>
        </header>
        <article style={{ paddingTop: 0, paddingBottom: 0 }}>
          <p className="HeadingForgotPassword">Forgot Password?</p>

          <p className="Textupperinput">
            Provide Your account's email for which you want to reset your
            password!
          </p>
          <Formik
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
              <form className="ForgotPasswordForm" onSubmit={handleSubmit}>
                <input
                  name="email"
                  type="email"
                  className="InputboxEmail"
                  placeholder="E-MAIL"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.email && touched.email && (
                  <label className="ForgotPassworderrors">{errors.email}</label>
                )}

                <div className="buttondivison" style={{ display: "flex" }}>
                  <input
                    className="SendEmailInput"
                    type="submit"
                    value="SEND"
                    disabled={isSubmitting}
                    style={{ marginRight: "2px" }}
                  />
                  <button
                    className="SendEmailInput"
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
          <img
            src={turkuamklogo}
            alt="turkuamklogo"
            class="mt-5 mb-4"
            height="70px"
          />
        </footer>
      </main>
    </React.Fragment>
  );
};

export default ForgotPassword;
