import { useState } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import styles from "../../../styles/Login.module.css";
import Image from "next/image";
import axios from "../../../utils/axios";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { unauthPage } from "../../../middleware/authorizationPage";
import Layout from "../../../components/Layout";

export async function getServerSideProps(context) {
  await unauthPage(context);
  return { props: {} };
}

export default function Login(props) {
  const router = useRouter();
  const [form, setForm] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (form.userEmail === "" && form.userPassword === "") {
      setShowError("Fill all the form to login!");
    } else if (form.userEmail === "") {
      setShowError("Fill your email form now!");
    } else if (form.userPassword === "") {
      setShowError("Fill your password form now!");
    } else {
      axios.axiosApiIntances
        .post("auth/login", form)
        .then((res) => {
          setShowSuccess(res.data.msg);
          setShowError(false);
          Cookie.set("token", res.data.data.token, {
            expires: 1,
            secure: true,
          });
          Cookie.set("user", res.data.data.user_id, {
            expires: 1,
            secure: true,
          });
          if (res.data.data.user_pin.length > 0) {
            router.push("/");
          } else {
            router.push("/auth/add_pin");
          }
        })
        .catch((err) => {
          setShowError(err.response.data.msg);
          setShowSuccess(false);
        });
    }
  };
  return (
    <Layout title="Login">
      <div className="row">
        <div className={`${styles.left_column} col`}>
          <div className={styles.zwallet_text}>
            <h2>Zwallet</h2>
          </div>
          <div className={styles.image_header_position_2}>
            <Image
              src="/img/header-zwallet-line-app.png"
              alt="zwallet header image"
              width={850}
              height={850}
            />
          </div>
          <div className={styles.image_header_position}>
            <Image
              src="/img/header-zwallet-app.png"
              alt="zwallet header image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.zwallet_text_2}>
            <h3>App that Covering Banking Needs.</h3>
          </div>
          <div className={styles.zwallet_text_3}>
            <p>
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
        <div className="col-5">
          <h4 className={`${styles.signup_text} mt-5 ms-4 pt-5`}>
            Start Accessing Bank Needs With All Device And All Platforms With
            30.000+ Users
          </h4>
          <p className={`${styles.signup_text_2} text-muted ms-4 mt-4`}>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form
            className={`${styles.form_size} mt-5 ms-4`}
            onSubmit={handleLogin}
          >
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BiEnvelope />
              </span>
              <input
                type="email"
                className="form-control"
                onChange={(event) => {
                  setForm({ ...form, ...{ userEmail: event.target.value } });
                }}
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3 mt-5">
              <span className="input-group-text" id="basic-addon1">
                <BiLockAlt />
              </span>
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  setForm({ ...form, ...{ userPassword: event.target.value } });
                }}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <p className="float-end">Forgot Password?</p>
            {showSuccess && (
              <div className="alert alert-success mt-5" role="alert">
                {showSuccess}
              </div>
            )}
            {showError && (
              <div className="alert alert-danger mt-5" role="alert">
                {showError}
              </div>
            )}
            <button
              type="submit"
              className={`${styles.signin_button} btn mt-4`}
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p>
                Don’t have an account? Let’s{" "}
                <a href="/register" className={styles.signup_text_link}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
