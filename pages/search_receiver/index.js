import Layout from "../../components/Layout";
import Navbar from "../../components/module/Navbar";
import styles from "../../styles/SearchReceiver.module.css";
import Link from "next/link";
import Footer from "../../components/module/Footer";
import Image from "next/image";
import LeftColumn from "../../components/LeftColumn";
import { authPage } from "../../middleware/authorizationPage";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  axios.setToken(data.token);

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

  return {
    props: { user },
  };
}

export default function SearchReceiver(props) {
  console.log(props);
  const router = useRouter();
  axios.setToken(Cookie.get("token"));

  const [searchReceiver, setSearchReceiver] = useState("");
  const [sortReceiver, setSortReceiver] = useState("user_name ASC");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [receiverData, setReceiverData] = useState({});
  const limit = 7;

  useEffect(() => {
    if (searchReceiver) {
      axios.axiosApiIntances
        .get(
          `users/?page=${page}&limit=${limit}&keywords=${searchReceiver}&sort=${sortReceiver}`
        )
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      setData([]);
    }
  }, [page, searchReceiver, sortReceiver]);

  const handleTransfer = (id) => {
    axios.axiosApiIntances
      .get(`users/${id}`)
      .then((res) => {
        setReceiverData(res.data.data[0]);
        router.push(`/transfer/${id}`);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Layout title="Search Receiver">
      <Navbar />
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <LeftColumn />
          <div className={`${styles.right_column} col-7 ms-3 shadow`}>
            <p className="mt-3">Search Receiver</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                onChange={(event) => setSearchReceiver(event.target.value)}
                placeholder="Search receiver here"
                aria-label="Search receiver here"
                aria-describedby="basic-addon1"
              />
            </div>
            {data.map((item, index) => {
              if (item.user_id !== props.user.user_id) {
                return (
                  <div className="row" key={index}>
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
                          <p
                            onClick={() => {
                              handleTransfer(item.user_id);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {item.user_name}
                          </p>
                          <p className="text-muted">{item.user_phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return "";
              }
            })}
            {/* *************** */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
