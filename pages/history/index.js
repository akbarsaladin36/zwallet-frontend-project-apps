import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/History.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import Cookie from "js-cookie";
import { authPage } from "../../middleware/authorizationPage";
import axios from "../../utils/axios";
import LeftColumn from "components/LeftColumn";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);
  // const { id } = context.query;

  const user = await axios.axiosApiIntances
    .get(`users/${data.user}`)
    .then((res) => {
      console.log(res.data.data[0]);
      return res.data.data[0];
    })
    .catch((err) => {
      console.log(err.response);
      return {};
    });

  const historyWeek = await axios.axiosApiIntances
    .get("transaction?sort=month&limit=5")
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err.response);
      return [];
    });

  const historyMonth = await axios.axiosApiIntances
    .get("transaction?sort=week&limit=5")
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.log(err.response);
      return [];
    });

  return {
    props: { user, historyWeek, historyMonth },
  };
}

export default function History(props) {
  // console.log(props);
  const userId = Cookie.get("user");
  const [historyWeek, setHistoryWeek] = useState([]);
  const [historyMonth, setHistoryMonth] = useState([]);

  useEffect(() => {
    setHistoryWeek(props.historyWeek);
    setHistoryMonth(props.historyMonth);
  }, []);

  return (
    <Layout title="Transaction History">
      <Navbar user={props.user} />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p>Transaction History</p>
            <p className="text-muted">This Week</p>
            {historyWeek.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        {item.transaction_type ? (
                          <Image
                            src="/img/default-profile-picture.jpg"
                            alt="profile user"
                            width={60}
                            height={60}
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
                      <div className="col-6">
                        <p>
                          {item.transaction_type
                            ? "Me"
                            : item.transaction_receiver_id == userId
                            ? item.senderDetail.user_name
                            : item.receiverDetail.user_name}
                        </p>
                        <p className="text-muted">
                          {item.transaction_type ? "Top Up" : "Transfer"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-end">
                    {item.transaction_type ? (
                      <p className="mt-4 text-success">
                        {`+Rp.${item.transaction_amount}`}
                      </p>
                    ) : (
                      <p className="mt-4 text-danger">
                        {`-Rp.${item.transaction_amount}`}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
            <p className="text-muted mt-5">This Month</p>
            {historyMonth.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col">
                    <div className="row">
                      <div className="col-3">
                        {item.transaction_type ? (
                          <Image
                            src="/img/default-profile-picture.jpg"
                            alt="profile user"
                            width={60}
                            height={60}
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
                      <div className="col-6">
                        <p>
                          {item.transaction_type
                            ? "Me"
                            : item.transaction_receiver_id == userId
                            ? item.senderDetail.user_name
                            : item.receiverDetail.user_name}
                        </p>
                        <p className="text-muted">
                          {item.transaction_type ? "Top Up" : "Transfer"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-end">
                    {item.transaction_type ? (
                      <p className="mt-4 text-success">
                        {`+Rp.${item.transaction_amount}`}
                      </p>
                    ) : (
                      <p className="mt-4 text-danger">
                        {`-Rp.${item.transaction_amount}`}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
