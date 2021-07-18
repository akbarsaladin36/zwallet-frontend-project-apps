import Layout from "../../../components/Layout";
import Navbar from "../../../components/module/Navbar";
import styles from "../../../styles/Status.module.css";
import Link from "next/link";
import Footer from "../../../components/module/Footer";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import LeftColumn from "../../../components/LeftColumn";
import { authPage } from "../../../middleware/authorizationPage";
import axios from "../../../utils/axios";
import Cookie from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = authPage(context);
  axios.setToken(data.token);
  const date = Date(Date.now());

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  return {
    props: { user, date },
  };
}

export default function StatusSuccess(props) {
  // console.log(props);
  const router = useRouter();
  const token = Cookie.get("token");
  axios.setToken(token);

  const receiverData = Cookie.get("receiverId");
  const amountData = Cookie.get("transferAmount");
  const noteData = Cookie.get("transferNote");
  const userBalanceData = Cookie.get("senderBalance");
  const receiverNameData = Cookie.get("receiverName");
  const receiverPhoneNumberData = Cookie.get("receiverPhoneNumber");

  const [receiverId, setReceiverId] = useState(receiverData);
  const [transferAmount, setTransferAmount] = useState(amountData);
  const [transferNote, setTransferNote] = useState(noteData);
  const [senderBalance, setSenderBalance] = useState(userBalanceData);
  const [receiverName, setReceiverName] = useState(receiverNameData);
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState(
    receiverPhoneNumberData
  );
  const [dateTime, setDateTime] = useState(props.date);

  const handleBackToHome = () => {
    Cookie.remove("receiverId");
    Cookie.remove("transferAmount");
    Cookie.remove("transferNote");
    Cookie.remove("senderBalance");
    Cookie.remove("receiverName");
    Cookie.remove("receiverPhoneNumber");
    router.push("/");
  };

  return (
    <Layout title="Transfer Success">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <div className="row">
              <div className="col text-center mt-5">
                <div
                  className={`${styles.right_column_confirm_1} rounded-circle mx-auto`}
                >
                  <i className={styles.right_column_check_1}>
                    <FiCheck
                      className={`${styles.right_column_check_2} mt-2`}
                    />
                  </i>
                </div>
                <p className="mt-3">Transfer Success</p>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Amount</p>
                    <h2>{`Rp.${transferAmount}`}</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Balance left</p>
                    <h2>{`Rp.${senderBalance}`}</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Date &amp; Time</p>
                    <h2>{dateTime}</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Notes</p>
                    <h2>{transferNote}</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <div className="row">
              <div className={`${styles.right_column_1} col mt-5 shadow`}>
                <div className="row">
                  <div className="col-2">
                    <Image
                      src="/img/default-profile-picture.jpg"
                      alt="profile user"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="col-8">
                    <p>{receiverName}</p>
                    <p className="text-muted">{receiverPhoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ********** */}
            <button
              className={`${styles.right_column_button_1} btn float-end mt-3 mb-3`}
              onClick={handleBackToHome}
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
