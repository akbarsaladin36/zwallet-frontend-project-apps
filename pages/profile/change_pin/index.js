import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/ChangePIN.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import LeftColumn from "../../../components/LeftColumn";
import { authPage } from "../../../middleware/authorizationPage";
import axios from "../../../utils/axios";
import { useState } from "react";
import Cookie from "js-cookie";

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

export default function ChangePIN(props) {
  const [pinOne, setPinOne] = useState("");
  const [pinTwo, setPinTwo] = useState("");
  const [pinThree, setPinThree] = useState("");
  const [pinFour, setPinFour] = useState("");
  const [pinFive, setPinFive] = useState("");
  const [pinSix, setPinSix] = useState("");

  const handleChangePIN = (event) => {
    event.preventDefault();
    const setPin = pinOne + pinTwo + pinThree + pinFour + pinFive + pinSix;
    axios.setToken(Cookie.get("token"));

    axios.axiosApiIntances
      .patch("users/update-pin", { newPin: setPin })
      .then((res) => {
        console.log(res);
        setPinOne("");
        setPinTwo("");
        setPinThree("");
        setPinFour("");
        setPinFive("");
        setPinSix("");
      })
      .catch((err) => {
        console.log(err);
        setPinOne("");
        setPinTwo("");
        setPinThree("");
        setPinFour("");
        setPinFive("");
        setPinSix("");
      });
  };

  return (
    <Layout title="Change PIN">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p>Change PIN</p>
            <p className="text-muted">
              Enter your current 6 digits Zwallet PIN below to continue to the
              next steps.
            </p>
            <div className="row">
              <div className="col text-center">
                <form
                  className={`${styles.form_size} mx-auto`}
                  onSubmit={handleChangePIN}
                >
                  <div className="row text-center">
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={(event) => {
                            setPinOne(event.target.value);
                          }}
                          value={pinOne}
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={(event) => {
                            setPinTwo(event.target.value);
                          }}
                          value={pinTwo}
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={(event) => {
                            setPinThree(event.target.value);
                          }}
                          value={pinThree}
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={(event) => {
                            setPinFour(event.target.value);
                          }}
                          value={pinFour}
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={(event) => {
                            setPinFive(event.target.value);
                          }}
                          value={pinFive}
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="password"
                          onChange={(event) => {
                            setPinSix(event.target.value);
                          }}
                          value={pinSix}
                          id="exampleInputPassword1"
                          maxLength="1"
                          size="2"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className={`${styles.right_column_button_2} btn mt-3 mb-3`}
                  >
                    Change PIN
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
