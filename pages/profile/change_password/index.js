import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/ChangePassword.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import axios from "../../../utils/axios";
import { BiLockAlt } from "react-icons/bi";
import { authPage } from "../../../middleware/authorizationPage";
import LeftColumn from "../../../components/LeftColumn";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err);
      return {};
    });

  return {
    props: { user },
  };
}

export default function ChangePassword(props) {
  console.log(props);

  const [userCurrentPassword, setUserCurrentPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [repeatUserNewPassword, setRepeatUserNewPassword] = useState("");

  useEffect(() => {
    axios.setToken(Cookie.get("token"));
  });

  const handleChangePassword = (event) => {
    event.preventDefault();
    if (userNewPassword === repeatUserNewPassword) {
      axios.axiosApiIntances
        .patch("users/update-password", {
          userCurrentPassword,
          userNewPassword,
        })
        .then((res) => {
          console.log(res);
          setUserCurrentPassword("");
          setUserNewPassword("");
          setRepeatUserNewPassword("");
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      console.log("Password is not match. Please try again.");
    }
  };

  return (
    <Layout title="Change Password">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p>Change Password</p>
            <p className="text-muted">
              You must enter your current password and then type your new
              password twice.
            </p>
            <div className="row">
              <div className="col text-center">
                <form
                  className={`${styles.form_size} mx-auto`}
                  onSubmit={handleChangePassword}
                >
                  <div className="input-group mb-3 mt-5">
                    <span className="input-group-text" id="basic-addon1">
                      <BiLockAlt />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(event) => {
                        setUserCurrentPassword(event.target.value);
                      }}
                      value={userCurrentPassword}
                      placeholder="Current Password"
                      aria-label="Current Password"
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
                        setUserNewPassword(event.target.value);
                      }}
                      value={userNewPassword}
                      placeholder="New Password"
                      aria-label="New Password"
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
                        setRepeatUserNewPassword(event.target.value);
                      }}
                      value={repeatUserNewPassword}
                      placeholder="Repeat new password"
                      aria-label="Repeat new password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <button
                    className={`${styles.right_column_button_2} btn mt-3 mb-3`}
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
