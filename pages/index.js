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

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      // console.log(res);
      return res.data.data[0];
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

  const transactionHistory = await axios.axiosApiIntances
    .get("transaction?sort=month&limit=4")
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err.response);
      return [];
    });

  // const reduxStore = initializeStore();
  // const { dispatch } = reduxStore;
  // dispatch(getUsersByIdData(data.user_id));
  return {
    props: { user, balance, transactionHistory },
  };
}

export default function Home(props) {
  const userId = Cookie.get("user");
  console.log(props);
  console.log(userId);
  return (
    <Layout title="Home">
      <Navbar />
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
                    <button className={`${styles.right_button_column_1} btn`}>
                      Transfer
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-end mt-3">
                    <button className={`${styles.right_button_column_1} btn`}>
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
                {props.transactionHistory.map((item, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-7">
                        <div className="row">
                          <div className="col-4">
                            <Image
                              src="/img/default-profile-picture.jpg"
                              alt="profile user"
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="col-8">
                            <p className={styles.right_column_2_text_3}>
                              Samuel Suhi
                            </p>
                            <p
                              className={`${styles.right_column_2_text_3} text-muted`}
                            >
                              {item.transaction_type ? "Top Up" : "Transfer"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 d-flex justify-content-end text-success">
                        <p className={`${styles.right_column_2_text_3} mt-3`}>
                          {item.transaction_type
                            ? `+${item.transaction_amount}`
                            : `-${item.transaction_amount}`}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {/* ****************** */}
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
