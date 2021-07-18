import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/Transfer.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import LeftColumn from "../../components/LeftColumn";
import Cookie from "js-cookie";
import { authPage } from "../../middleware/authorizationPage";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);
  const { id } = context.query;

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  const receiverBalance = await axios.axiosApiIntances
    .get(`transaction/balance/${data.user}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  const receiver = await axios.axiosApiIntances
    .get(`users/${id}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  return {
    props: { user, receiverBalance, receiver },
  };
}

export default function Transfer(props) {
  console.log(props);
  const router = useRouter();
  const token = Cookie.get("token");
  // const sender = Cookie.get("user");
  axios.setToken(token);

  const [receiverId, setReceiverId] = useState(props.receiver.user_id);
  // const [senderId, setSenderId] = useState(sender);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferNote, setTransferNote] = useState("");
  const [senderBalance, setSenderBalance] = useState(props.receiverBalance);
  const [receiverName, setReceiverName] = useState(props.receiver.user_name);
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState(
    props.receiver.user_phone
  );

  const goToConfirmation = (id) => {
    const transferInformation = {
      receiverId: parseInt(receiverId),
      transferAmount: transferAmount,
      transferNote: transferNote,
      senderBalance: senderBalance - transferAmount,
      receiverName: receiverName,
      receiverPhoneNumber: receiverPhoneNumber,
    };
    // console.log(transferInformation);
    if (transferAmount > props.receiverBalance) {
      console.log("Your balance is out. Please top up.");
    } else {
      axios.axiosApiIntances
        .get(`users/${id}`)
        .then((res) => {
          Cookie.set("receiverId", transferInformation.receiverId);
          Cookie.set("transferAmount", transferInformation.transferAmount);
          Cookie.set("transferNote", transferInformation.transferNote);
          Cookie.set("senderBalance", transferInformation.senderBalance);
          Cookie.set("receiverName", transferInformation.receiverName);
          Cookie.set(
            "receiverPhoneNumber",
            transferInformation.receiverPhoneNumber
          );
          router.push(`/confirmation/${props.receiver.user_id}`);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  return (
    <Layout title="Transfer">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Transfer Money</p>
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
                    <p>{props.receiver.user_name}</p>
                    <p className="text-muted">{props.receiver.user_phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className={`${styles.right_column_text_1} text-muted mt-3`}>
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="row mt-5">
              <div className="col d-flex justify-content-center">
                <div className="row">
                  <div className="col-12 text-center mx-auto">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={styles.right_column_input_1}
                        id="exampleFormControlInput1"
                        placeholder="00.0"
                        value={transferAmount}
                        onChange={(event) =>
                          setTransferAmount(event.target.value)
                        }
                        size="10"
                      />
                    </div>
                    <p>Rp{props.receiverBalance} Available</p>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Add some notes"
                        name="transferNote"
                        value={transferNote}
                        onChange={(event) =>
                          setTransferNote(event.target.value)
                        }
                        size="10"
                      />
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <button
                          onClick={() => {
                            goToConfirmation(props.receiver.user_id);
                          }}
                          className={`${styles.right_column_button_1} btn mb-3 mt-5`}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
