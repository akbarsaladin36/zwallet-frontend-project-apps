import Layout from "../components/Layout";
import Navbar from "../components/module/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import { connect } from "react-redux";
import Footer from "../components/module/Footer";
import Image from "next/image";
import LeftColumn from "../components/LeftColumn";
// import { getUsersByIdData, getBalanceData } from "../redux/actions/dashboard";
// import { initializeStore } from "../redux/store";
import { authPage } from "../middleware/authorizationPage";
import axios from "../utils/axios";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Modal, Button, Form } from "react-bootstrap";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

  const transactionHistory = await axios.axiosApiIntances
    .get("transaction?sort=month&limit=4")
    .then((res) => {
      // console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err.response);
      return [];
    });

  const balance = await axios.axiosApiIntances
    .get("transaction/balance")
    .then((res) => {
      // console.log(res);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err.response);
      return [];
    });

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return [];
    });

  // const reduxStore = initializeStore();
  // const { dispatch } = reduxStore;
  // dispatch(getUsersByIdData(data.user_id));
  return {
    props: { transactionHistory, balance, user },
  };
}

export default function Home(props) {
  const router = useRouter();
  const token = Cookie.get("token");
  axios.setToken(token);
  const userId = Cookie.get("user");

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setData(props.transactionHistory);
  }, []);

  const goToSearchReceiver = () => {
    router.push("/search_receiver");
  };

  const handleTopUp = (event) => {
    event.preventDefault();
    const data = {
      transactionType: "Y",
      transactionAmount: amount,
      receiverId: userId,
    };
    if (!amount) {
      setShowError("Fill your amount form to top up!");
    } else if (amount > 2000000) {
      setShowError("Your amount must be less than 2.000.000 to top up!");
    } else {
      axios.axiosApiIntances
        .post("transaction", data)
        .then((res) => {
          // console.log(res);
          setShowSuccess(res.data.msg);
          setShowError(false);
          setTimeout(() => {
            setShow(false);
            router.push("/");
          }, 2500);
        })
        .catch((err) => {
          console.log(err.response);
          setShowError(err.response.data.msg);
          setShowSuccess(false);
        });
    }
  };

  return (
    <Layout title="Home">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className="col-7 ms-3">
            <div className={`${styles.right_column_1} row shadow`}>
              <div className="col mt-3 ms-3">
                <p>Balance</p>
                <h1>{props.balance}</h1>
                <p>{props.user.user_phone}</p>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col d-flex justify-content-end mt-4">
                    <button
                      className={`${styles.right_button_column_1} btn`}
                      onClick={goToSearchReceiver}
                    >
                      Transfer
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-end mt-3">
                    <button
                      className={`${styles.right_button_column_1} btn`}
                      onClick={handleShow}
                    >
                      Top Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={`${styles.right_column_3} col-6 shadow`}>
                Kiri
              </div>
              <div className={`${styles.right_column_2} col-5 shadow ms-4`}>
                <div className="row mt-3">
                  <div className={`${styles.right_column_2_text_1} col-7`}>
                    <p>Transaction History</p>
                  </div>
                  <div className="col-5 d-flex justify-content-end">
                    <Link href="/history">
                      <a className={styles.right_column_2_text_2}>See All</a>
                    </Link>
                  </div>
                </div>
                {data.map((item, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-7">
                        <div className="row">
                          <div className="col-4">
                            {item.transaction_type ? (
                              <Image
                                src="/img/default-profile-picture.jpg"
                                alt="profile user"
                                width={30}
                                height={30}
                              />
                            ) : (
                              <img
                                src={`http://localhost:5000/backend4/api/${
                                  item.transaction_receiver_id == userId
                                    ? item.senderDetail.user_image
                                    : item.receiverDetail.user_image
                                }`}
                                alt="profile user"
                                className={`${styles.profile_picture_size} rounded-circle`}
                              />
                            )}
                          </div>
                          <div className="col-8">
                            <p className={styles.right_column_2_text_3}>
                              {item.transaction_type
                                ? "Me"
                                : item.transaction_receiver_id == userId
                                ? item.senderDetail.user_name
                                : item.receiverDetail.user_name}
                            </p>
                            <p
                              className={`${styles.right_column_2_text_3} text-muted`}
                            >
                              {item.transaction_type ? "Top Up" : "Transfer"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 d-flex justify-content-end">
                        {item.transaction_type ? (
                          <p
                            className={`${styles.right_column_2_text_3} mt-3 text-success`}
                          >
                            {`+Rp.${item.transaction_amount}`}
                          </p>
                        ) : (
                          <p
                            className={`${styles.right_column_2_text_3} mt-3 text-danger`}
                          >
                            {`-Rp.${item.transaction_amount}`}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
                {/* *****Modal****** */}
                <Modal show={show} onHide={handleClose} animation={true}>
                  <Modal.Header closeButton>
                    <Modal.Title>Top Up Money</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Enter an amount of money that you want to top up your
                      balance account. Maximum top up is Rp.2.000.000.
                    </p>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder="Enter your amount.."
                          onChange={(event) => setAmount(event.target.value)}
                        />
                      </Form.Group>
                    </Form>
                    {showSuccess && (
                      <div className="alert alert-success mt-4" role="alert">
                        {showSuccess}
                      </div>
                    )}
                    {showError && (
                      <div className="alert alert-danger mt-4" role="alert">
                        {showError}
                      </div>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={(event) => handleTopUp(event)}
                    >
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* ****************** */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

// const mapStateToProps = (state) => ({
//   dashboard: state.dashboard,
// });

// const mapDispatchToProps = { getUsersByIdData, getBalanceData };
// // (null, mapDispatchToProps)
// // (mapStateToProps)
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
