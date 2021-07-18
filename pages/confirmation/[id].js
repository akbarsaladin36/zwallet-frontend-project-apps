import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/Confirmation.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import { authPage } from "../../middleware/authorizationPage";
import axios from "../../utils/axios";
import LeftColumn from "components/LeftColumn";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);
  const { id } = context.query;
  const date = Date(Date.now());

  const receiverData = await axios.axiosApiIntances
    .get(`users/${id}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
    });

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
    props: { user, receiverData, date },
  };
}

export default function Confirmation(props) {
  const token = Cookie.get("token");
  axios.setToken(token);
  const router = useRouter();

  const receiverData = Cookie.get("receiverId");
  const amountData = Cookie.get("transferAmount");
  const noteData = Cookie.get("transferNote");
  const userBalanceData = Cookie.get("senderBalance");
  const receiverNameData = Cookie.get("receiverName");
  const receiverPhoneNumberData = Cookie.get("receiverPhoneNumber");

  console.log(props);

  const [showModal, setShowModal] = useState(false);
  const [receiverId, setReceiverId] = useState(receiverData);
  const [transferAmount, setTransferAmount] = useState(amountData);
  const [transferNote, setTransferNote] = useState(noteData);
  const [senderBalance, setSenderBalance] = useState(userBalanceData);
  const [dateTime, setDateTime] = useState(props.date);
  const [receiverName, setReceiverName] = useState(receiverNameData);
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState(
    receiverPhoneNumberData
  );
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [six, setSix] = useState();
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    axios.setToken(Cookie.get("token"));
  }, []);

  const handleTransfer = (event) => {
    event.preventDefault();
    const setPin = one + two + three + four + five + six;
    axios.axiosApiIntances
      .post("transaction", {
        transactionAmount: transferAmount,
        senderPin: setPin,
        receiverId: receiverId,
      })
      .then((res) => {
        console.log(res);
        router.push("/status/success");
      })
      .catch((err) => {
        console.log(err.response);
        router.push("/status/error");
      });
  };

  return (
    <Layout title="Confirmation">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Transfer To</p>
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
                    <p>{props.receiverData.user_name}</p>
                    <p className="text-muted">
                      {props.receiverData.user_phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5">Details</p>
            <div className="row">
              <div className={`${styles.right_column_1} col mt-3 shadow`}>
                <div className="row">
                  <div className="col-8">
                    <p>Amount</p>
                    <h2>Rp.{transferAmount}</h2>
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
                    <h2>Rp.{senderBalance}</h2>
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
            <Button
              variant="primary"
              onClick={handleShowModal}
              className={`${styles.right_column_button_1} float-end mt-3 mb-3`}
            >
              Continue
            </Button>
            {/* **Modal*** */}
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Enter PIN to Transfer
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="text-muted">
                  Enter your 6 digits PIN for confirmation to continue
                  transferring money.
                </p>
                {/* <form> */}
                <div className="row text-center">
                  <div className="col-1">
                    <div className="mb-3">
                      <input
                        type="password"
                        name="Pin1"
                        id="exampleInputPassword1"
                        maxLength="1"
                        size="2"
                        onChange={(event) => setOne(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-3">
                      <input
                        type="password"
                        name="Pin2"
                        id="exampleInputPassword1"
                        maxLength="1"
                        size="2"
                        onChange={(event) => setTwo(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-3">
                      <input
                        type="password"
                        name="Pin3"
                        id="exampleInputPassword1"
                        maxLength="1"
                        size="2"
                        onChange={(event) => setThree(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-3">
                      <input
                        type="password"
                        name="Pin4"
                        id="exampleInputPassword1"
                        maxLength="1"
                        size="2"
                        onChange={(event) => setFour(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-3">
                      <input
                        type="password"
                        name="Pin5"
                        id="exampleInputPassword1"
                        maxLength="1"
                        size="2"
                        onChange={(event) => setFive(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="mb-3">
                      <input
                        type="password"
                        name="Pin6"
                        id="exampleInputPassword1"
                        maxLength="1"
                        size="2"
                        onChange={(event) => setSix(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="primary"
                  onClick={(event) => handleTransfer(event)}
                  className={styles.right_column_button_1}
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
            {/* ********** */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
